import main from "../../database/Database"
import User from "../../database/UserSchema"

export default async function get_Users(req, res) {
    main().catch(err => console.log(err))
    const {method} = req

    switch(method){
        case "GET":
            try {
                const users = await User.find()
                res.status(200).json(users)
            } 
            catch(error) {
                res.status(500).json(error)
            }
        case "POST":
            try{
                const users = await User.create(req.body)
                res.status(200).json(users)
            }catch(err){
                res.status(500).json(err)
            }
            break;
        default:
            res.status(405).end(`Method ${method} Not Allowed`)
    }
    
}