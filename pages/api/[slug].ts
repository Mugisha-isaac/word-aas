import {NextApiRequest,NextApiResponse} from 'next';


export default async function name(req:NextApiRequest, res:NextApiResponse) {
    res.send("hello world!!")
}