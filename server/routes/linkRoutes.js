import express from "express";
import Link from "../models/link.model.js";

const router = express.Router();

// GET /links?tag=js&search=react
router.get("/", async (req, res) => {
    const { tag, search } = req.query;
    let filter = {};
    if (tag) filter.tags = tag;
    if (search) filter.title = new RegExp(search, "i");
    const links = await Link.find(filter);
    res.json(links);
});

// POST /links
router.post("/", async (req, res) => {
    try {
        const newLink = new Link(req.body);
        const saved = await newLink.save();
        res.status(201).json(saved);
    } catch (e) {
        res.status(400).json({ message: e.message });
    }
});

//  PATCH /links/:id
router.patch("/:id", async (req, res) => {
    try {
        const updated = await Link.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updated);
    } catch (e) {
        res.status(400).json({ message: e.message });
    }
});

// DELETE /links/:id
router.delete("/:id", async (req, res) => {
    try {
        await Link.findByIdAndDelete(req.params.id);
        res.status(200).json({message:"Link Deleted"})
    } catch (e) {
        res.status(400).json({ message: e.message });
    }
});

export default router;
