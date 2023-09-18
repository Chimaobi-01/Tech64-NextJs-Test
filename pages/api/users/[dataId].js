import { data } from "@/data/data";

export default function handler(req, res) {
    const { dataId } = req.query

    if (req.method === 'GET') {
        const user = data.find(d => d.id === parseInt(dataId))
        res.status(200).json(user)

    } else if (req.method === 'POST') {
        const index = data.findIndex(d => d.id === parseInt(dataId))
        const newUserDetail = req.body.newUserDetail
        data[index] = newUserDetail
        res.status(201).json(newUserDetail)
    }
    else if (req.method === 'DELETE') {
        const deletedUser = data.find(d => d.id === parseInt(dataId))

        const index = data.findIndex(d => d.id === parseInt(dataId))

        data.splice(index, 1)

        res.status(200).json(deletedUser)
    }

}