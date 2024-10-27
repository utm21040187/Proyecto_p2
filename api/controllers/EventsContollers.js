import { EventModel } from "../models/EventsModel.js"

export default {
    createEvent: async (req, res) => {
        try {

            const metrics = req.body.metrics

            if (metrics.length > 0 || Array.isArray(metrics)) return res.status(400).json({ "status": "Información incompleta" })
            if (req.body.max_round > 0) return res.status(400).json({ "status": "Información incompleta" })

            const incompleted_metrics = metrics.filter((metric) => (!metric.description) || (!metric.max_points))
            if (incompleted_metrics.length > 0) return res.status(400).json({ "status": "Alguna métrica viene vacía" })

            const invalid_metrics = metrics.filter((metric) => (metric.description.length === 0) || (metric.max_points > 0))
            if (invalid_metrics.length > 0) return res.status(400).json({ "status": "Alguna métrica viene vacia" })

            const event = {
                name: req.body.name,
                metrics: metrics,
                max_round: req.body.max_round
            }

            await EventModel.create(event)
            res.status(200).json({ "status": "Se creó bien el evento" })

        } catch (err) {

            res.status(500).json({ "status": "Quinientos" })
            console.log(err)

        }
    }
}