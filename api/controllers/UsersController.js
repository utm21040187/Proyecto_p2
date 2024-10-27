import { Schema, model } from "mongoose";


const ScoreSchema = new Schema([
    {
        id_team: { type: Schema.Types.ObjectId, required: true }
    },
    {
        round: { type: Number, required: true }
    },
    {
        id_event: { type: Schema.Types.ObjectId, required: true }
    },
    {
        scores: [{
            id_metric: { type: Schema.Types.ObjectId, required: true }
        },
        {
            score: { type: Number, required: true }
        },
        {
            id_judge: {type: Schema.Types.ObjectId, required: true }
        }]
    }
])

export const ScoreModel = model("scores", ScoreSchema)