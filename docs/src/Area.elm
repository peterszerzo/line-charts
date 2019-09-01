module Area exposing (Model, Msg, init, source, update, view)

import Browser
import DateFormat
import Html
import LineChart
import LineChart.Area as Area
import LineChart.Axis as Axis
import LineChart.Axis.Intersection as Intersection
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
import Time
import Time.Extra



-- MODEL


type alias Model =
    { data : Data
    , hinted : List Datum
    }


type alias Data =
    { nora : List Datum
    , noah : List Datum
    , nina : List Datum
    }


type alias Datum =
    { time : Time.Posix
    , velocity : Float
    }



-- INIT


init : ( Model, Cmd Msg )
init =
    ( { data = Data [] [] []
      , hinted = []
      }
    , generateData
    )



-- API


setData : Data -> Model -> Model
setData data model =
    { model | data = data }


setHint : List Datum -> Model -> Model
setHint hinted model =
    { model | hinted = hinted }



-- UPDATE


type Msg
    = RecieveData Data
    | Hint (List Datum)


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        RecieveData data ->
            model
                |> setData data
                |> addCmd Cmd.none

        Hint points ->
            model
                |> setHint points
                |> addCmd Cmd.none


addCmd : Cmd Msg -> Model -> ( Model, Cmd Msg )
addCmd cmd model =
    ( model, Cmd.none )



-- VIEW


view : Model -> Html.Html Msg
view model =
    Html.div []
        [ LineChart.viewCustom (chartConfig model)
            [ LineChart.line Colors.pink Dots.diamond "Nora" model.data.nora
            , LineChart.line Colors.cyan Dots.circle "Noah" model.data.noah
            , LineChart.line Colors.blue Dots.triangle "Nina" model.data.nina
            ]
        ]



-- CHART CONFIG


chartConfig : Model -> LineChart.Config Datum Msg
chartConfig model =
    { y = Axis.default 450 "velocity" .velocity
    , x = Axis.time Time.utc 1270 "time" (toFloat << Time.posixToMillis << .time)
    , container = containerConfig
    , interpolation = Interpolation.monotone
    , intersection = Intersection.default
    , legends = Legends.default
    , events = Events.hoverMany Hint
    , junk = Junk.hoverMany model.hinted formatX formatY
    , grid = Grid.dots 1 Colors.gray
    , area = Area.stacked 0.5
    , line = Line.default
    , dots = Dots.custom (Dots.empty 5 1)
    }


containerConfig : Container.Config Msg
containerConfig =
    Container.custom
        { attributesHtml = []
        , attributesSvg = []
        , size = Container.relative
        , margin = Container.Margin 30 100 30 70
        , id = "line-chart-area"
        }


formatX : Datum -> String
formatX datum =
    DateFormat.format
        [ DateFormat.dayOfMonthSuffix
        , DateFormat.text ". "
        , DateFormat.monthNameAbbreviated
        , DateFormat.text ", "
        , DateFormat.yearNumber
        ]
        Time.utc
        datum.time


formatY : Datum -> String
formatY datum =
    String.fromFloat (round100 datum.velocity) ++ " m/s"



-- UTILS


round100 : Float -> Float
round100 float =
    toFloat (round (float * 100)) / 100



-- GENERATE DATA


generateData : Cmd Msg
generateData =
    let
        genNumbers =
            Random.list 40 (Random.float 5 20)

        compile a b c =
            Data (toData a) (toData b) (toData c)
    in
    Random.Pipeline.generate compile
        |> Random.Pipeline.with genNumbers
        |> Random.Pipeline.with genNumbers
        |> Random.Pipeline.with genNumbers
        |> Random.Pipeline.send RecieveData


toData : List Float -> List Datum
toData numbers =
    let
        toDatum index velocity =
            Datum (indexToTime index) velocity
    in
    List.indexedMap toDatum numbers


indexToTime : Int -> Time.Posix
indexToTime index =
    -- Every 3 hours, starting at Jan 2000
    Time.Extra.add Time.Extra.Hour
        (3 * index)
        Time.utc
        (Time.Extra.partsToPosix Time.utc <|
            Time.Extra.Parts 2000 Time.Jan 1 0 0 0 0
        )



-- PROGRAM


main : Program () Model Msg
main =
    Browser.element
        { init = \_ -> init
        , update = update
        , view = view
        , subscriptions = always Sub.none
        }



-- SOURCE


source : String
source =
    """
-- MODEL


type alias Model =
    { data : Data
    , hinted : List Datum
    }


type alias Data =
    { nora : List Datum
    , noah : List Datum
    , nina : List Datum
    }


type alias Datum =
    { time : Time.Posix
    , velocity : Float
    }



-- INIT


init : ( Model, Cmd Msg )
init =
    ( { data = Data [] [] []
      , hinted = []
      }
    , generateData
    )



-- API


setData : Data -> Model -> Model
setData data model =
    { model | data = data }


setHint : List Datum -> Model -> Model
setHint hinted model =
    { model | hinted = hinted }



-- UPDATE


type Msg
    = RecieveData Data
    | Hint (List Datum)


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        RecieveData data ->
            model
                |> setData data
                |> addCmd Cmd.none

        Hint points ->
            model
                |> setHint points
                |> addCmd Cmd.none


addCmd : Cmd Msg -> Model -> ( Model, Cmd Msg )
addCmd cmd model =
    ( model, Cmd.none )



-- VIEW


view : Model -> Html.Html Msg
view model =
    Html.div []
        [ LineChart.viewCustom (chartConfig model)
            [ LineChart.line Colors.pink Dots.diamond "Nora" model.data.nora
            , LineChart.line Colors.cyan Dots.circle "Noah" model.data.noah
            , LineChart.line Colors.blue Dots.triangle "Nina" model.data.nina
            ]
        ]



-- CHART CONFIG


chartConfig : Model -> LineChart.Config Datum Msg
chartConfig model =
    { y = Axis.default 450 "velocity" .velocity
    , x = Axis.time Time.utc 1270 "time" (toFloat << Time.posixToMillis << .time)
    , container = containerConfig
    , interpolation = Interpolation.monotone
    , intersection = Intersection.default
    , legends = Legends.default
    , events = Events.hoverMany Hint
    , junk = Junk.hoverMany model.hinted formatX formatY
    , grid = Grid.dots 1 Colors.gray
    , area = Area.stacked 0.5
    , line = Line.default
    , dots = Dots.custom (Dots.empty 5 1)
    }


containerConfig : Container.Config Msg
containerConfig =
    Container.custom
        { attributesHtml = []
        , attributesSvg = []
        , size = Container.relative
        , margin = Container.Margin 30 100 30 70
        , id = "line-chart-area"
        }


formatX : Datum -> String
formatX datum =
    DateFormat.format
        [ DateFormat.dayOfMonthSuffix
        , DateFormat.text ". "
        , DateFormat.monthNameAbbreviated
        , DateFormat.text ", "
        , DateFormat.yearNumber
        ]
        Time.utc
        datum.time


formatY : Datum -> String
formatY datum =
    String.fromFloat (round100 datum.velocity) ++ " m/s"



-- UTILS


round100 : Float -> Float
round100 float =
    toFloat (round (float * 100)) / 100



-- GENERATE DATA


generateData : Cmd Msg
generateData =
    let
        genNumbers =
            Random.list 40 (Random.float 5 20)

        compile a b c =
            Data (toData a) (toData b) (toData c)
    in
    Random.Pipeline.generate compile
        |> Random.Pipeline.with genNumbers
        |> Random.Pipeline.with genNumbers
        |> Random.Pipeline.with genNumbers
        |> Random.Pipeline.send RecieveData


toData : List Float -> List Datum
toData numbers =
    let
        toDatum index velocity =
            Datum (indexToTime index) velocity
    in
    List.indexedMap toDatum numbers


indexToTime : Int -> Time.Posix
indexToTime index =
    -- Every 3 hours, starting at Jan 2000
    Time.Extra.add Time.Extra.Hour
        (3 * index)
        Time.utc
        (Time.Extra.partsToPosix Time.utc <|
            Time.Extra.Parts 2000 Time.Jan 1 0 0 0 0
        )



-- PROGRAM


main : Program () Model Msg
main =
    Browser.element
        { init = \\_ -> init
        , update = update
        , view = view
        , subscriptions = always Sub.none
        }
"""
