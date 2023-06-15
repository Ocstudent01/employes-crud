/** Controller */
import Users from '../model/user'

// esto se va usar para listar todos los usuarios
// get: http://localhost:3000/api/users
export async function getUsers(req,res){
    try {
        const users = await Users.find({})

        if(!users) return res.status(404).json({error:"Data not Found"})
        res.status(200).json(users)
    } catch (error) {
        res.status(404).json({error:"Error While Fetching Data"})
    }
}

// esto se va usar para listar los usuarios por id
// post: http://localhost:3000/api/users/1
export async function getUserId(req,res){
    try {
        const {userId} = req.query;
        
        const user = await Users.findById(userId);
        res.status(200).json(user)
        //res.status(404).json({error:"User not Selected..!"})
    } catch (error) {
        res.status(404).json({error:"Cannot get the user..!"})
    }
}

// esto se va usar para registrar todos los usuarios
// post: http://localhost:3000/api/users
export async function postUser(req,res){
    
        const user  = new Users({
            name:   req.body.name,
            avatar: req.body.avatar,
            email:  req.body.email,
            salary: req.body.salary,
            date:   req.body.date,
            status: req.body.status

        });

        try {
            await user.save();
            res.status(200).json(user)
        } catch (error) {
            res.send('ha ocuarrido un error'+ error)
        }
   

}

//aqui se va actualizar por el id
// put: http://localhost:3000/api/users/1
export async function putUser(req,res){
    try {
        const {userId} = req.query;
        const formData = req.body;
        
        if(userId && formData){
            const user = await Users.findByIdAndUpdate(userId,formData);
            res.status(200).json(user)
        }
        res.status(404).json({error:"User Not Selected...!"})
    } catch (error) {
        res.status(404).json({error:"Error While Updating the Data..!!"})
    }
}

//aqui se va eliminar por el id
// delete: http://localhost:3000/api/users/1
export async function deleteUser(req,res){
    try {
       const {userId} = req.query;
       
       if(userId){
        const user = await Users.findByIdAndDelete(userId)
        return res.status(200).json(user)
       }
       res.status(400).json({error:"User Not Selected..!"})
    } catch (error) {
        res.status(400).json({error:"Error While Delete the User...!"})
    }
}