module Selection exposing (Model, Msg, init, source, update, view)

import Browser
import DateFormat
import Html
import Html.Attributes
import LineChart
import LineChart.Area as Area
import LineChart.Axis as Axis
import LineChart.Axis.Intersection as Intersection
import LineChart.Axis.Line as AxisLine
import LineChart.Axis.Range as Range
import LineChart.Axis.Ticks as Ticks
import LineChart.Axis.Title as Title
import LineChart.Colors as Colors
import LineChart.Container as Container
import LineChart.Coordinate as Coordinate
import LineChart.Dots as Dots
import LineChart.Events as Events
import LineChart.Grid as Grid
import LineChart.Interpolation as Interpolation
import LineChart.Junk as Junk
import LineChart.Legends as Legends
import LineChart.Line as Line
import Random
import Random.Pipeline
import Svg
import Svg.Attributes
import Time
import Time.Extra


main : Program () Model Msg
main =
    Browser.element
        { init = \_ -> init
        , update = update
        , view = view
        , subscriptions = always Sub.none
        }



-- MODEL


type alias Model =
    { data : Data
    , hovered : Maybe Float
    , selection : Maybe Selection
    , dragging : Bool
    , hinted : Maybe Datum
    }


type alias Selection =
    { xStart : Float
    , xEnd : Float
    }


type alias Data =
    { sanJose : List Datum
    , sanDiego : List Datum
    , sanFransisco : List Datum
    }


type alias Datum =
    { time : Time.Posix
    , displacement : Float
    }



-- INIT


init : ( Model, Cmd Msg )
init =
    ( { data = Data [] [] []
      , hovered = Nothing
      , selection = Nothing
      , dragging = False
      , hinted = Nothing
      }
    , generateData
    )


generateData : Cmd Msg
generateData =
    let
        genNumbers min max =
            Random.list 201 (Random.float min max)

        compile a b c =
            Data (toData a) (toData b) (toData c)
    in
    Random.Pipeline.generate compile
        |> Random.Pipeline.with (genNumbers -10 10)
        |> Random.Pipeline.with (genNumbers -7 7)
        |> Random.Pipeline.with (genNumbers -8 8)
        |> Random.Pipeline.send RecieveData


toData : List Float -> List Datum
toData numbers =
    let
        toDatum index displacement =
            Datum (indexToTime index) displacement
    in
    List.indexedMap toDatum numbers


indexToTime : Int -> Time.Posix
indexToTime index =
    -- Every 15 minutes, starting at Jan 2015
    Time.Extra.add Time.Extra.Minute
        (15 * index)
        Time.utc
        (Time.Extra.partsToPosix Time.utc <|
            Time.Extra.Parts 2015 Time.Jan 1 0 0 0 0
        )



-- MODEL API


setData : Data -> Model -> Model
setData data model =
    { model | data = data }


setSelection : Maybe Selection -> Model -> Model
setSelection selection model =
    { model | selection = selection }


setDragging : Bool -> Model -> Model
setDragging dragging model =
    { model | dragging = dragging }


setHovered : Maybe Float -> Model -> Model
setHovered hovered model =
    { model | hovered = hovered }


setHint : Maybe Datum -> Model -> Model
setHint hinted model =
    { model | hinted = hinted }


getSelectionXStart : Float -> Model -> Float
getSelectionXStart hovered model =
    case model.selection of
        Just selection ->
            selection.xStart

        Nothing ->
            hovered



-- UPDATE


type Msg
    = RecieveData Data
      -- Chart Main
    | Hold Coordinate.Point
    | Move Coordinate.Point
    | Drop Coordinate.Point
    | LeaveChart Coordinate.Point
    | LeaveContainer Coordinate.Point
      -- Chart Zoom
    | Hint (Maybe Datum)


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        RecieveData data ->
            model
                |> setData data
                |> addCmd Cmd.none

        Hold point ->
            model
                |> setSelection Nothing
                |> setDragging True
                |> addCmd Cmd.none

        Move point ->
            if model.dragging then
                let
                    start =
                        getSelectionXStart point.x model

                    newSelection =
                        Selection start point.x
                in
                model
                    |> setSelection (Just newSelection)
                    |> setHovered (Just point.x)
                    |> addCmd Cmd.none

            else
                model
                    |> setHovered (Just point.x)
                    |> addCmd Cmd.none

        Drop point ->
            if point.x == getSelectionXStart point.x model then
                model
                    |> setSelection Nothing
                    |> setDragging False
                    |> addCmd Cmd.none

            else
                model
                    |> setDragging False
                    |> addCmd Cmd.none

        LeaveChart point ->
            model
                |> setHovered Nothing
                |> addCmd Cmd.none

        LeaveContainer point ->
            model
                |> setDragging False
                |> setHovered Nothing
                |> addCmd Cmd.none

        Hint datum ->
            model
                |> setHint datum
                |> addCmd Cmd.none


addCmd : Cmd Msg -> Model -> ( Model, Cmd Msg )
addCmd cmd model =
    ( model, Cmd.none )



-- VIEW


view : Model -> Html.Html Msg
view model =
    Html.div [] <|
        case model.selection of
            Nothing ->
                [ viewPlaceholder
                , viewChartMain model
                ]

            Just selection ->
                if selection.xStart == selection.xEnd then
                    [ viewPlaceholder
                    , viewChartMain model
                    ]

                else
                    [ viewChartZoom model selection
                    , viewChartMain model
                    ]


viewPlaceholder : Html.Html Msg
viewPlaceholder =
    Html.div
        [ Html.Attributes.class "view__selection__placeholder" ]
        [ viewInnerPlaceholder ]


viewInnerPlaceholder : Html.Html Msg
viewInnerPlaceholder =
    Html.div
        [ Html.Attributes.class "view__selection__placeholder__inner" ]
        [ viewPlaceholderText ]


viewPlaceholderText : Html.Html Msg
viewPlaceholderText =
    Html.div
        [ Html.Attributes.class "view__selection__placeholder__inner__text" ]
        [ Html.text "Select a range on the chart to the right!" ]



-- MAIN CHART


viewChartMain : Model -> Html.Html Msg
viewChartMain model =
    viewChart model.data
        { range = Range.default
        , junk = junkConfig model
        , legends = Legends.default
        , events = myEvents
        , width = 670
        , margin = Container.Margin 30 165 30 70
        , dots = Dots.custom (Dots.full 0)
        , id = "line-chart-selection-main"
        }


myEvents : Events.Config Datum Msg
myEvents =
    let
        options bool =
            { stopPropagation = True
            , preventDefault = True
            , catchOutsideChart = bool
            }
    in
    Events.custom
        [ Events.onWithOptions "mousedown" (options False) Hold Events.getData
        , Events.onWithOptions "mousemove" (options False) Move Events.getData
        , Events.onWithOptions "mouseup" (options True) Drop Events.getData
        , Events.onWithOptions "mouseleave" (options False) LeaveChart Events.getData
        , Events.onWithOptions "mouseleave" (options True) LeaveContainer Events.getData
        ]


junkConfig : Model -> Junk.Config Datum msg
junkConfig model =
    Junk.custom <|
        \system ->
            { below = below system model.selection
            , above = above system model.hovered
            , html = []
            }


below : Coordinate.System -> Maybe Selection -> List (Svg.Svg msg)
below system selection =
    case selection of
        Just { xStart, xEnd } ->
            let
                attributes =
                    [ Svg.Attributes.fill "#4646461a" ]

                ( yStart, yEnd ) =
                    ( system.y.min, system.y.max )

                viewSelection =
                    Junk.rectangle system attributes xStart xEnd yStart yEnd
            in
            [ viewSelection ]

        Nothing ->
            []


above : Coordinate.System -> Maybe Float -> List (Svg.Svg msg)
above system maybeHovered =
    case maybeHovered of
        Just hovered ->
            [ Junk.vertical system [] hovered
            , title system
            ]

        Nothing ->
            [ title system ]


title : Coordinate.System -> Svg.Svg msg
title system =
    Junk.labelAt system system.x.max system.y.max 20 -5 "start" Colors.black "Earthquake in"



-- ZOOM CHART


viewChartZoom : Model -> Selection -> Html.Html Msg
viewChartZoom model selection =
    viewChart model.data
        { range = xAxisRangeConfig selection
        , junk =
            Junk.hoverOne model.hinted
                [ ( "time", formatX )
                , ( "displacement", formatY )
                ]
        , events = Events.hoverOne Hint
        , legends = Legends.none
        , dots = Dots.hoverOne model.hinted
        , width = 670
        , margin = Container.Margin 30 60 30 75
        , id = "line-chart-zoom"
        }


xAxisRangeConfig : Selection -> Range.Config
xAxisRangeConfig selection =
    let
        xStart =
            min selection.xStart selection.xEnd

        xEnd =
            max selection.xStart selection.xEnd
    in
    Range.window xStart xEnd


formatX : Datum -> String
formatX datum =
    DateFormat.format
        [ DateFormat.hourFixed
        , DateFormat.text ":"
        , DateFormat.minuteFixed
        , DateFormat.amPmLowercase
        , DateFormat.text ", "
        , DateFormat.dayOfMonthSuffix
        , DateFormat.text ". "
        , DateFormat.monthNameAbbreviated
        , DateFormat.text ", "
        , DateFormat.yearNumber
        ]
        Time.utc
        datum.time


formatY : Datum -> String
formatY datum =
    String.fromFloat (round100 datum.displacement)



-- VIEW CHART


type alias Config =
    { range : Range.Config
    , junk : Junk.Config Datum Msg
    , events : Events.Config Datum Msg
    , legends : Legends.Config Datum Msg
    , dots : Dots.Config Datum
    , margin : Container.Margin
    , width : Int
    , id : String
    }


viewChart : Data -> Config -> Html.Html Msg
viewChart data { range, junk, events, legends, dots, width, margin, id } =
    let
        containerStyles =
            [ Html.Attributes.style "display" "inline-block"
            , Html.Attributes.style "width" "50%"
            , Html.Attributes.style "height" "100%"
            ]
    in
    LineChart.viewCustom
        { y =
            Axis.custom
                { title = Title.atAxisMax 50 0 "displacement"
                , variable = Just << .displacement
                , pixels = 450
                , range = Range.padded 20 20
                , axisLine = AxisLine.rangeFrame Colors.gray
                , ticks = Ticks.float 5
                }
        , x =
            Axis.custom
                { title = Title.default "time"
                , variable = Just << toFloat << Time.posixToMillis << .time
                , pixels = width
                , range = range
                , axisLine = AxisLine.rangeFrame Colors.gray
                , ticks = Ticks.time Time.utc 5
                }
        , container =
            Container.custom
                { attributesHtml = containerStyles
                , attributesSvg = []
                , size = Container.static
                , margin = margin
                , id = id
                }
        , interpolation = Interpolation.monotone
        , intersection = Intersection.default
        , legends = legends
        , events = events
        , junk = junk
        , grid = Grid.default
        , area = Area.default
        , line = Line.default
        , dots = dots
        }
        [ LineChart.line Colors.pink Dots.circle "San Jose" data.sanJose
        , LineChart.line Colors.cyan Dots.circle "San Fransisco" data.sanFransisco
        , LineChart.line Colors.blue Dots.circle "San Diego" data.sanDiego
        ]



-- UTILS


round100 : Float -> Float
round100 float =
    toFloat (round (float * 100)) / 100



-- SOURCE


source : String
source =
    """
main : Program () Model Msg
main =
    Browser.element
        { init = \\_ -> init
        , update = update
        , view = view
        , subscriptions = always Sub.none
        }



-- MODEL


type alias Model =
    { data : Data
    , hovered : Maybe Float
    , selection : Maybe Selection
    , dragging : Bool
    , hinted : Maybe Datum
    }


type alias Selection =
    { xStart : Float
    , xEnd : Float
    }


type alias Data =
    { sanJose : List Datum
    , sanDiego : List Datum
    , sanFransisco : List Datum
    }


type alias Datum =
    { time : Time.Posix
    , displacement : Float
    }



-- INIT


init : ( Model, Cmd Msg )
init =
    ( { data = Data [] [] []
      , hovered = Nothing
      , selection = Nothing
      , dragging = False
      , hinted = Nothing
      }
    , generateData
    )


generateData : Cmd Msg
generateData =
    let
        genNumbers min max =
            Random.list 201 (Random.float min max)

        compile a b c =
            Data (toData a) (toData b) (toData c)
    in
    Random.Pipeline.generate compile
        |> Random.Pipeline.with (genNumbers -10 10)
        |> Random.Pipeline.with (genNumbers -7 7)
        |> Random.Pipeline.with (genNumbers -8 8)
        |> Random.Pipeline.send RecieveData


toData : List Float -> List Datum
toData numbers =
    let
        toDatum index displacement =
            Datum (indexToTime index) displacement
    in
    List.indexedMap toDatum numbers


indexToTime : Int -> Time.Posix
indexToTime index =
    -- Every 15 minutes, starting at Jan 2015
    Time.Extra.add Time.Extra.Minute
        (15 * index)
        Time.utc
        (Time.Extra.partsToPosix Time.utc <|
            Time.Extra.Parts 2015 Time.Jan 1 0 0 0 0
        )



-- MODEL API


setData : Data -> Model -> Model
setData data model =
    { model | data = data }


setSelection : Maybe Selection -> Model -> Model
setSelection selection model =
    { model | selection = selection }


setDragging : Bool -> Model -> Model
setDragging dragging model =
    { model | dragging = dragging }


setHovered : Maybe Float -> Model -> Model
setHovered hovered model =
    { model | hovered = hovered }


setHint : Maybe Datum -> Model -> Model
setHint hinted model =
    { model | hinted = hinted }


getSelectionXStart : Float -> Model -> Float
getSelectionXStart hovered model =
    case model.selection of
        Just selection ->
            selection.xStart

        Nothing ->
            hovered



-- UPDATE


type Msg
    = RecieveData Data
      -- Chart Main
    | Hold Coordinate.Point
    | Move Coordinate.Point
    | Drop Coordinate.Point
    | LeaveChart Coordinate.Point
    | LeaveContainer Coordinate.Point
      -- Chart Zoom
    | Hint (Maybe Datum)


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        RecieveData data ->
            model
                |> setData data
                |> addCmd Cmd.none

        Hold point ->
            model
                |> setSelection Nothing
                |> setDragging True
                |> addCmd Cmd.none

        Move point ->
            if model.dragging then
                let
                    start =
                        getSelectionXStart point.x model

                    newSelection =
                        Selection start point.x
                in
                model
                    |> setSelection (Just newSelection)
                    |> setHovered (Just point.x)
                    |> addCmd Cmd.none

            else
                model
                    |> setHovered (Just point.x)
                    |> addCmd Cmd.none

        Drop point ->
            if point.x == getSelectionXStart point.x model then
                model
                    |> setSelection Nothing
                    |> setDragging False
                    |> addCmd Cmd.none

            else
                model
                    |> setDragging False
                    |> addCmd Cmd.none

        LeaveChart point ->
            model
                |> setHovered Nothing
                |> addCmd Cmd.none

        LeaveContainer point ->
            model
                |> setDragging False
                |> setHovered Nothing
                |> addCmd Cmd.none

        Hint datum ->
            model
                |> setHint datum
                |> addCmd Cmd.none


addCmd : Cmd Msg -> Model -> ( Model, Cmd Msg )
addCmd cmd model =
    ( model, Cmd.none )



-- VIEW


view : Model -> Html.Html Msg
view model =
    Html.div [] <|
        case model.selection of
            Nothing ->
                [ viewPlaceholder
                , viewChartMain model
                ]

            Just selection ->
                if selection.xStart == selection.xEnd then
                    [ viewPlaceholder
                    , viewChartMain model
                    ]

                else
                    [ viewChartZoom model selection
                    , viewChartMain model
                    ]


viewPlaceholder : Html.Html Msg
viewPlaceholder =
    Html.div
        [ Html.Attributes.class "view__selection__placeholder" ]
        [ viewInnerPlaceholder ]


viewInnerPlaceholder : Html.Html Msg
viewInnerPlaceholder =
    Html.div
        [ Html.Attributes.class "view__selection__placeholder__inner" ]
        [ viewPlaceholderText ]


viewPlaceholderText : Html.Html Msg
viewPlaceholderText =
    Html.div
        [ Html.Attributes.class "view__selection__placeholder__inner__text" ]
        [ Html.text "Select a range on the chart to the right!" ]



-- MAIN CHART


viewChartMain : Model -> Html.Html Msg
viewChartMain model =
    viewChart model.data
        { range = Range.default
        , junk = junkConfig model
        , legends = Legends.default
        , events = myEvents
        , width = 670
        , margin = Container.Margin 30 165 30 70
        , dots = Dots.custom (Dots.full 0)
        , id = "line-chart-selection-main"
        }


myEvents : Events.Config Datum Msg
myEvents =
    let
        options bool =
            { stopPropagation = True
            , preventDefault = True
            , catchOutsideChart = bool
            }
    in
    Events.custom
        [ Events.onWithOptions "mousedown" (options False) Hold Events.getData
        , Events.onWithOptions "mousemove" (options False) Move Events.getData
        , Events.onWithOptions "mouseup" (options True) Drop Events.getData
        , Events.onWithOptions "mouseleave" (options False) LeaveChart Events.getData
        , Events.onWithOptions "mouseleave" (options True) LeaveContainer Events.getData
        ]


junkConfig : Model -> Junk.Config Datum msg
junkConfig model =
    Junk.custom <|
        \\system ->
            { below = below system model.selection
            , above = above system model.hovered
            , html = []
            }


below : Coordinate.System -> Maybe Selection -> List (Svg.Svg msg)
below system selection =
    case selection of
        Just { xStart, xEnd } ->
            let
                attributes =
                    [ Svg.Attributes.fill "#4646461a" ]

                ( yStart, yEnd ) =
                    ( system.y.min, system.y.max )

                viewSelection =
                    Junk.rectangle system attributes xStart xEnd yStart yEnd
            in
            [ viewSelection ]

        Nothing ->
            []


above : Coordinate.System -> Maybe Float -> List (Svg.Svg msg)
above system maybeHovered =
    case maybeHovered of
        Just hovered ->
            [ Junk.vertical system [] hovered
            , title system
            ]

        Nothing ->
            [ title system ]


title : Coordinate.System -> Svg.Svg msg
title system =
    Junk.labelAt system system.x.max system.y.max 20 -5 "start" Colors.black "Earthquake in"



-- ZOOM CHART


viewChartZoom : Model -> Selection -> Html.Html Msg
viewChartZoom model selection =
    viewChart model.data
        { range = xAxisRangeConfig selection
        , junk =
            Junk.hoverOne model.hinted
                [ ( "time", formatX )
                , ( "displacement", formatY )
                ]
        , events = Events.hoverOne Hint
        , legends = Legends.none
        , dots = Dots.hoverOne model.hinted
        , width = 670
        , margin = Container.Margin 30 60 30 75
        , id = "line-chart-zoom"
        }


xAxisRangeConfig : Selection -> Range.Config
xAxisRangeConfig selection =
    let
        xStart =
            min selection.xStart selection.xEnd

        xEnd =
            max selection.xStart selection.xEnd
    in
    Range.window xStart xEnd


formatX : Datum -> String
formatX datum =
    DateFormat.format
        [ DateFormat.hourFixed
        , DateFormat.text ":"
        , DateFormat.minuteFixed
        , DateFormat.amPmLowercase
        , DateFormat.text ", "
        , DateFormat.dayOfMonthSuffix
        , DateFormat.text ". "
        , DateFormat.monthNameAbbreviated
        , DateFormat.text ", "
        , DateFormat.yearNumber
        ]
        Time.utc
        datum.time


formatY : Datum -> String
formatY datum =
    String.fromFloat (round100 datum.displacement)



-- VIEW CHART


type alias Config =
    { range : Range.Config
    , junk : Junk.Config Datum Msg
    , events : Events.Config Datum Msg
    , legends : Legends.Config Datum Msg
    , dots : Dots.Config Datum
    , margin : Container.Margin
    , width : Int
    , id : String
    }


viewChart : Data -> Config -> Html.Html Msg
viewChart data { range, junk, events, legends, dots, width, margin, id } =
    let
        containerStyles =
            [ Html.Attributes.style "display" "inline-block"
            , Html.Attributes.style "width" "50%"
            , Html.Attributes.style "height" "100%"
            ]
    in
    LineChart.viewCustom
        { y =
            Axis.custom
                { title = Title.atAxisMax 50 0 "displacement"
                , variable = Just << .displacement
                , pixels = 450
                , range = Range.padded 20 20
                , axisLine = AxisLine.rangeFrame Colors.gray
                , ticks = Ticks.float 5
                }
        , x =
            Axis.custom
                { title = Title.default "time"
                , variable = Just << toFloat << Time.posixToMillis << .time
                , pixels = width
                , range = range
                , axisLine = AxisLine.rangeFrame Colors.gray
                , ticks = Ticks.time Time.utc 5
                }
        , container =
            Container.custom
                { attributesHtml = containerStyles
                , attributesSvg = []
                , size = Container.static
                , margin = margin
                , id = id
                }
        , interpolation = Interpolation.monotone
        , intersection = Intersection.default
        , legends = legends
        , events = events
        , junk = junk
        , grid = Grid.default
        , area = Area.default
        , line = Line.default
        , dots = dots
        }
        [ LineChart.line Colors.pink Dots.circle "San Jose" data.sanJose
        , LineChart.line Colors.cyan Dots.circle "San Fransisco" data.sanFransisco
        , LineChart.line Colors.blue Dots.circle "San Diego" data.sanDiego
        ]



-- UTILS


round100 : Float -> Float
round100 float =
    toFloat (round (float * 100)) / 100
"""
