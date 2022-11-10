import Posts from "../../../database/PostSchema";

export default async function handler(req, res){
    const post_id = req.query.post_id;

    try{
        const result = await Posts.findById(post_id)
        res.status(200).json(result)
    }catch(err){
        res.status(500).json(err)
    }
    
} 