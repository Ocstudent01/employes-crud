
import connectMongo from '../../../database/conn'

//importamos del controlador los metodos mencionados en la linea sgte
import { getUsers,postUser } from '../../../database/controller';

export default async function handler(req, res) {
    connectMongo().catch(()=>res.status(405).json({error:"Error in the Connection"}))


    //type of request
    const {method}= req
    // ['GET', 'POST','PUT', 'DELETE']
    switch(method){
        case 'GET':
            getUsers(req,res);
            break;
        case 'POST':
            postUser(req,res);
            break;
        default:
            res.setHeader('Allow',['GET','POST']);
            res.status(405).end(`Method ${method} Not Allowd`)
            break;
    }
    
  }
  