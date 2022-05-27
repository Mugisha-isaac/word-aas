// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {NextApiRequest,NextApiResponse} from 'next'
import {phraseResolver} from '../../util/api';

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
   const {query} = req.body as {query:string}
    try{
         const phrase = await phraseResolver(query);
         res.json({phrase});
    }

    catch(e){
      res.status(400).json({error:(e as Error).message})
    }
}
