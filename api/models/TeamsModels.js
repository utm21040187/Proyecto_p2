import { Schema, model} from "mongoose";

const TeamSchema = new ([
    {
        Name: {
            type: String,
            requiered: true
        }
    },
    {
        Participants:[

        ],
        requiered: true
    },
    {
        Lider:[

        ],
        requiered: true
    },
    {
        Round:{
            type: Number,
            requiered: true
        }
    },
    {
        Grade:[

        ],
        requiered: true
    },
])

export const TeamModel = model("events", TeamSchema)