// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {NextApiRequest,NextApiResponse} from 'next'

export default function handler(req:NextApiRequest, res:NextApiResponse) {
   const {query} = req.body as {query:string}
   res.send(query);
}
