import express from 'express'

import UserRoute from './UserRoutes';
import AuthRoute from './AuthRoutes';
import RoomRoute from './RoomRoutes';
// import MessageRoute from './MessageRoutes';

export default (app: any)=>{
    app.use(
        express.json(),
        AuthRoute,
        UserRoute,
        RoomRoute
    )
}