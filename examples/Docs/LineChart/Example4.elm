module Docs.LineChart.Example4 exposing (main)

import Html
import LineChart


main : Html.Html msg
main =
    chart


chart : Html.Html msg
chart =
    LineChart.view3 .age .weight alice bobby chuck



-- DATA


type alias Data =
    { age : Float
    , weight : Float
    , height : Float
    , income : Float
    }


alice : List Data
alice =
    [ Data 4 24 0.94 0
    , Data 25 75 1.73 25000
    , Data 43 83 1.75 40000
    ]


bobby : List Data
bobby =
    [ Data 4 22 1.01 0
    , Data 25 75 1.87 28000
    , Data 43 77 1.87 52000
    ]


chuck : List Data
chuck =
    [ Data 4 21 0.98 0
    , Data 25 89 1.83 85000
    , Data 43 95 1.84 120000
    ]
