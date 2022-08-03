import express from "express";
import livrosRota from "./livrosRouts.js";
import AutorRotas from "./autoresRoutes.js";


const routes = app => {
    app.route('/').get((req, res)=>{
        res.status(200).send({titulo: "Hello, World!"})
    });
    app.use(
        express.json(),
        livrosRota,
        AutorRotas
    );
}

export default routes
