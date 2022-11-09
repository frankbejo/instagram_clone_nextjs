
import main from "./database/Database";
import Post from "./database/PostSchema";

export default async function get_Posts(req, res){
    main().catch(error => console.log(error))
    res.setHeader("Cache-Control","s-maxage=10, stale-while-revalidate")
    
    const {method} = req;

    switch(method){
        case "GET":
            try{
                const posts = await Post.find()
                res.status(200).json(posts)
            }catch(err){
                res.status(500).json(err)
            }
            break;
        case "POST":
            try{
                const posts = await Post.create(req.body)
                res.status(200).json(posts)
            }catch(err){
                res.status(500).json(err)
            }
            break;
        default:
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}