'use strick';

import express from "express";
import {
    home,
    see,
    getUpload,
    postUpload,
    getEdit,
    postEdit,
    deleteNotice
} from "../Controllers/controller";

const noticeRouter = express.Router();

noticeRouter.get("/", home);
noticeRouter.get("/notice/:id([\\d])", see);
noticeRouter.route("/upload").get(getUpload).post(postUpload);
noticeRouter.route("/notice/:id([\\d])/edit").get(getEdit).post(postEdit);
noticeRouter.get("/notice/:id([\\d])/delete", deleteNotice);

export default noticeRouter;