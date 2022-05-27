import {NextApiRequest,NextApiResponse} from 'next';


export default async function name(req:NextApiRequest, res:NextApiResponse) {
   const {slug} = req.query as {slug:string}
   res.send(slug)
}