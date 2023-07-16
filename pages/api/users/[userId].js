import connectMongo from '../../../database/conn'

//importamos del controlador los metodos mencionados en la linea sgte
import { getUserId,putUser,deleteUser } from '../../../database/controller';

export default async function handler(req, res) {
    connectMongo().catch(()=>res.status(405).json({error:"Error in the Connection"}))
    const {method}= req;

    // en esta clase solo pondremos los metodos con condicionales (ejemplo listar por id,actualizar por id o iliminar por id)
    switch(method){
        case "GET":
            getUserId(req,res);
            break;
            case 'PUT':
            putUser(req,res);
            break;
        case 'DELETE':
            deleteUser(req,res);
            break;
        default:
            res.setHeader('Allow',['GET','PUT','DELETE']);
            res.status(405).end(`Method ${method} Not Allowd`)
            break;
    }
}