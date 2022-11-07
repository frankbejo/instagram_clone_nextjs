
import main from "./database/database";
import Posts from "./database/schema";

export default async function get_Posts(req, res){
    main().catch(error => console.log(error))
    const {method} = req;

    switch(method){
        case "GET":
            try{
                const posts = await Posts.find()
                res.status(200).json(posts)
            }catch(err){
                res.status(500).json(err)
            }
            break;
        case "POST":
            try{
                const posts = await Posts.create(req.body)
                res.status(200).json(posts)
            }catch(err){
                res.status(500).json(err)
            }
            break;
        default:
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}