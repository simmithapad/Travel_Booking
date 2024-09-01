import express from 'express';
import { createTour, deleteTour, updateTour, getSingleTour, getAllTour } from '../controllers/tourController.js';

const router = express.Router()

// create new tour
router.post('/', createTour);

// update new tour
router.put('/:id', updateTour);

// delete new tour
router.delete('/:id', deleteTour);

// getSingle new tour
router.get('/:id', getSingleTour);

// getAll new tour
router.get('/:id', getAllTour);

export default router;