module Stepped exposing (Model, Msg, init, source, update, view)

import Browser
import Color.Convert
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
    { data : List Data
    , hinted : Maybe Data
    }


type alias Data =
    { year : Int
    , price : Float
    }



-- INIT


init : ( Model, Cmd Msg )
init =
    ( { data = initData
      , hinted = Nothing
      }
    , Cmd.none
    )


initData : List Data
initData =
    [ Data 1980 0.12
    , Data 1981 0.14
    , Data 1982 0.155
    , Data 1983 0.16
    , Data 1984 0.17
    , Data 1985 0.17
    , Data 1986 0.18
    , Data 1987 0.18
    , Data 1988 0.19
    , Data 1989 0.2
    , Data 1990 0.22
    , Data 1991 0.24
    , Data 1992 0.24
    , Data 1993 0.25
    , Data 1994 0.25
    , Data 1995 0.25
    , Data 1996 0.26
    , Data 1997 0.26
    , Data 1998 0.26
    , Data 1999 0.26
    , Data 2000 0.27
    , Data 2001 0.27
    , Data 2002 0.27
    , Data 2003 0.28
    , Data 2004 0.28
    , Data 2005 0.3
    , Data 2006 0.32
    , Data 2007 0.34
    , Data 2008 0.36
    , Data 2009 0.39
    , Data 2010 0.41
    , Data 2011 0.46
    , Data 2012 0.6
    ]



-- MODEL API


setHint : Maybe Data -> Model -> Model
setHint hinted model =
    { model | hinted = hinted }



-- UPDATE


type Msg
    = Hint (Maybe Data)


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Hint point ->
            model
                |> setHint point
                |> addCmd Cmd.none


addCmd : Cmd Msg -> Model -> ( Model, Cmd Msg )
addCmd cmd model =
    ( model, cmd )



-- VIEW


view : Model -> Html.Html Msg
view model =
    Html.div [] [ chart model ]



-- CHART


chart : Model -> Html.Html Msg
chart model =
    LineChart.viewCustom
        { y =
            Axis.custom
                { title = Title.default "price (£)"
                , variable = Just << .price
                , pixels = 380
                , range = Range.padded 20 20
                , axisLine = AxisLine.full Colors.gray
                , ticks = Ticks.float 5
                }
        , x =
            let
                toDate year =
                    Time.Extra.Parts year Time.Jan 1 0 0 0 0 |> Time.Extra.partsToPosix Time.utc
            in
            Axis.custom
                { title = Title.default "Year"
                , variable = Just << toFloat << Time.posixToMillis << toDate << .year
                , pixels = 1270
                , range = Range.padded 20 20
                , axisLine = AxisLine.full Colors.gray
                , ticks = Ticks.time Time.utc 10
                }
        , container =
            Container.custom
                { attributesHtml = []
                , attributesSvg = []
                , size = Container.relative
                , margin = Container.Margin 30 140 30 70
                , id = "line-chart-stepped"
                }
        , interpolation = Interpolation.stepped
        , intersection = Intersection.default
        , legends = Legends.default
        , events = Events.hoverOne Hint
        , junk =
            Junk.hoverOne model.hinted
                [ ( "year", \datum -> String.fromInt datum.year )
                , ( "price", \datum -> String.fromFloat datum.price ++ "£" )
                ]
        , grid = Grid.default
        , area = Area.default
        , line = Line.default
        , dots =
            let
                styleLegend _ =
                    Dots.empty 5 1

                styleIndividual datum =
                    if Just datum == model.hinted then
                        Dots.full 5

                    else
                        Dots.empty 5 1
            in
            Dots.customAny
                { legend = styleLegend
                , individual = styleIndividual
                }
        }
        [ LineChart.line Colors.pink Dots.circle "UK stamp" model.data ]



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
    { data : List Data
    , hinted : Maybe Data
    }


type alias Data =
    { year : Int
    , price : Float
    }



-- INIT


init : ( Model, Cmd Msg )
init =
    ( { data = initData
      , hinted = Nothing
      }
    , Cmd.none
    )


initData : List Data
initData =
    [ Data 1980 0.12
    , Data 1981 0.14
    , Data 1982 0.155
    , Data 1983 0.16
    , Data 1984 0.17
    , Data 1985 0.17
    , Data 1986 0.18
    , Data 1987 0.18
    , Data 1988 0.19
    , Data 1989 0.2
    , Data 1990 0.22
    , Data 1991 0.24
    , Data 1992 0.24
    , Data 1993 0.25
    , Data 1994 0.25
    , Data 1995 0.25
    , Data 1996 0.26
    , Data 1997 0.26
    , Data 1998 0.26
    , Data 1999 0.26
    , Data 2000 0.27
    , Data 2001 0.27
    , Data 2002 0.27
    , Data 2003 0.28
    , Data 2004 0.28
    , Data 2005 0.3
    , Data 2006 0.32
    , Data 2007 0.34
    , Data 2008 0.36
    , Data 2009 0.39
    , Data 2010 0.41
    , Data 2011 0.46
    , Data 2012 0.6
    ]



-- MODEL API


setHint : Maybe Data -> Model -> Model
setHint hinted model =
    { model | hinted = hinted }



-- UPDATE


type Msg
    = Hint (Maybe Data)


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Hint point ->
            model
                |> setHint point
                |> addCmd Cmd.none


addCmd : Cmd Msg -> Model -> ( Model, Cmd Msg )
addCmd cmd model =
    ( model, cmd )



-- VIEW


view : Model -> Html.Html Msg
view model =
    Html.div [] [ chart model ]



-- CHART


chart : Model -> Html.Html Msg
chart model =
    LineChart.viewCustom
        { y =
            Axis.custom
                { title = Title.default "price (£)"
                , variable = Just << .price
                , pixels = 380
                , range = Range.padded 20 20
                , axisLine = AxisLine.full Colors.gray
                , ticks = Ticks.float 5
                }
        , x =
            let
                toDate year =
                    Time.Extra.Parts year Time.Jan 1 0 0 0 0 |> Time.Extra.partsToPosix Time.utc
            in
            Axis.custom
                { title = Title.default "Year"
                , variable = Just << toFloat << Time.posixToMillis << toDate << .year
                , pixels = 1270
                , range = Range.padded 20 20
                , axisLine = AxisLine.full Colors.gray
                , ticks = Ticks.time Time.utc 10
                }
        , container =
            Container.custom
                { attributesHtml = []
                , attributesSvg = []
                , size = Container.relative
                , margin = Container.Margin 30 140 30 70
                , id = "line-chart-stepped"
                }
        , interpolation = Interpolation.stepped
        , intersection = Intersection.default
        , legends = Legends.default
        , events = Events.hoverOne Hint
        , junk =
            Junk.hoverOne model.hinted
                [ ( "year", \\datum -> String.fromInt datum.year )
                , ( "price", \\datum -> String.fromFloat datum.price ++ "£" )
                ]
        , grid = Grid.default
        , area = Area.default
        , line = Line.default
        , dots =
            let
                styleLegend _ =
                    Dots.empty 5 1

                styleIndividual datum =
                    if Just datum == model.hinted then
                        Dots.full 5

                    else
                        Dots.empty 5 1
            in
            Dots.customAny
                { legend = styleLegend
                , individual = styleIndividual
                }
        }
        [ LineChart.line Colors.pink Dots.circle "UK stamp" model.data ]



-- UTILS


round100 : Float -> Float
round100 float =
    toFloat (round (float * 100)) / 100
"""
