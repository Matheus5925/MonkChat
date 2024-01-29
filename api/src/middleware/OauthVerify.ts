import { Request, Response, NextFunction } from "express"
import jwt from 'jsonwebtoken'

async function verifyAccessToken(req: Request, resp: Response, next: NextFunction){
    try {
        const token = req.header('Authorization');

        if(!token) return resp.status(403).send({message: 'Token not informeted'});

        jwt.verify(token, `${process.env.PRIVATE_KEY}`, (err, user) => {
            if(err)
                return resp.status(403).send({message: 'Token is not valid'});
            
            next();
          });
        
    } catch (err) {
        resp.status(400)
    }
}

export { verifyAccessToken}