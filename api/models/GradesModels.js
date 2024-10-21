import { Schema, model} from "mongoose";

const GradesSchema = new ([
    {
        id_groups:[

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
        id_evento:[

        ],
        requiered: true
    },
    {
        Grade:[

        ],
        requiered: true
    }
])
export const GradeModel = model("events", GradesSchema)