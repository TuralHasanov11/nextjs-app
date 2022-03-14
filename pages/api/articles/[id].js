import { articles } from "../../../data";

export default function handler(req, res){
    const {query:{id}} = req
    const filtered = articles.find((el)=>{
        return el.id==id
    })

    if(filtered){
        res.status(200).json(filtered)
    }else{
        res.status(404).json({message:'Not found'})
    }
}