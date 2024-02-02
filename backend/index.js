import express from "express";
import mongoose from "mongoose";

import dotenv from "dotenv";
import { app } from "./app.js";
import { Post } from "./models/post.model.js";

dotenv.config({
  path: "./.env",
});

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Blogging App");
});
app.post("/posts", async (req, res) => {
  try {
    if (!req.body.title || !req.body.creater || !req.body.publishYear) {
      return res.status(400).send({
        message: "Send all required fieled : title, post, publishYear",
      });
    }
    const newPost = {
      title: req.body.title,
      creater: req.body.creater,
      publishYear: req.body.publishYear,
    };
    const posts = await Post.create(newPost);
    return res.status(201).send(posts);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});
app.get("/posts", async (req, res) => {
  try {
    const posts = await Post.find();
    return res.status(201).json(posts);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});
app.put("/posts/:id", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({
        message: "Send all required fieled : title, creater, publishYear",
      });
    }
    const { id } = req.params;
    const result = await Post.findByIdAndUpdate(id, req.body);
    if (!result) {
      return res.status(404).json({ message: "Post not found" });
    }
    return res.status(200).send({ message: "Post updated successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

app.delete("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Post.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: "Post not found" });
    }
    return res.status(200).send({ message: "Post deleted successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

mongoose.connect(process.env.MONGOURL).then(() => {
  console.log("App connected to database");
  app.listen(process.env.PORT, () => {
    console.log(`App is listening to port: ${process.env.PORT}`);
  });
});
