import { validateUser } from './controller/user.controller.js';
import { User } from './model/user.model.js';
import expressEjsLayouts from 'express-ejs-layouts';
import path from 'path';
import express from 'express';
const app=express();
app.set('views',path.join(path.resolve(),'view'));
app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(expressEjsLayouts);
app.get('/',validateUser,)
app.get('/addUser',);
app.post('/addUser',);
app.listen(5100,()=>{
    console.log('your server is started successfully');
});