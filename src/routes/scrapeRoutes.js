import express from 'express';
// src/controllers/scrapeController.js

import { scrapeImages } from '../controllers/scrapeController.js';

const router = express.Router();

router.get('/scrape', scrapeImages);

export default router;
