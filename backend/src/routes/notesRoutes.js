
  import express from "express";
import { getAllNotes, createNote, updateNote, deleteNote, getNoteById } from "../controllers/notesController.js";

const router = express.Router();    

router.get("/", getAllNotes);
router.get("/:id", getNoteById);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router


//mongodb+srv://rmerhi20:oEfv3RvvwT9hqU6L@cluster0.oouzrhe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0