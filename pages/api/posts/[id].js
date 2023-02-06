

import {postss} from "../../../data"

export default function handler(req, res) {
    let id = req.query.id
    let posts = postss.find(p => p.id == id)
    if(posts){

        res.status(200).json(posts)
    }else{
        res.status(400).json({err:"there no post"})
    }
}
