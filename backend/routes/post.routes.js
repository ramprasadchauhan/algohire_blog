import express from "express";
import { Post } from "../models/post.model.js";

const router = express.Router();
router.use(express.json());

// Route for save a new Post

// router.post("/posts", async (req, res) => {
//   try {
//     if (!req.body.title || !req.body.creater || !req.body.publishYear) {
//       return res.status(400).send({
//         message: "Send all required fieled : title, post, publishYear",
//       });
//     }
//     const newPost = {
//       title: req.body.title,
//       creater: req.body.creater,
//       publishYear: req.body.publishYear,
//     };
//     const posts = await Post.create(newPost);
//     return res.status(201).send(posts);
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).send({ message: error.message });
//   }
// });

// Route for get All Posts from database
// router.get("/posts", async (req, res) => {
//   try {
//     const posts = await Post.find();
//     return res.status(201).json(posts);
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).send({ message: error.message });
//   }
// });
// router.get("/posts/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const posts = await Post.findById(id);
//     return res.status(201).json(posts);
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).send({ message: error.message });
//   }
// });

// Route for update a Post
// router.put("/posts/:id", async (req, res) => {
//   try {
//     if (!req.body.title || !req.body.author || !req.body.publishYear) {
//       return res.status(400).send({
//         message: "Send all required fieled : title, creater, publishYear",
//       });
//     }
//     const { id } = req.params;
//     const result = await Post.findByIdAndUpdate(id, req.body);
//     if (!result) {
//       return res.status(404).json({ message: "Post not found" });
//     }
//     return res.status(200).send({ message: "Post updated successfully" });
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).send({ message: error.message });
//   }
// });

// Route for delete a Post
// router.delete("/posts/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const result = await Post.findByIdAndDelete(id);
//     if (!result) {
//       return res.status(404).json({ message: "Post not found" });
//     }
//     return res.status(200).send({ message: "Post deleted successfully" });
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).send({ message: error.message });
//   }
// });

export default router;
