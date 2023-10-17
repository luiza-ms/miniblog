import express from "express";
import multer from 'multer';
import storageTypes from './config/multer.js';

import postController from "./src/controllers/post.js";
import authController from "./src/controllers/auth.js";

const routes = express.Router();

routes.get("/", (req, res) => {
  return res.json({ name: "Rota raiz" });
});

routes.post("/auth", authController.login);
routes.post("/post/img" , multer(storageTypes).single('file') , (req , res) => {
   return res.json( {hello: "Rocket"});                        
});

routes.get("/post", postController.findAll);
routes.post("/post", authController.verificaToken, postController.add);
routes.get("/post/:id", postController.findOne);
routes.put("/post/:id", authController.verificaToken, postController.update);
routes.delete("/post/:id", authController.verificaToken, postController.deletePost);

export { routes as default };