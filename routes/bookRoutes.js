import express from 'express';
import { addBook, getAllBooks } from '../controller/bookController.js';

const router = express.Router();
router.post('/', addBook);
router.get('/', getAllBooks);

export default router; 