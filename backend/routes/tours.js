import express from 'express';
import { createTour, deleteTour, updateTour, getSingleTour, getAllTour, getTourBySearch, getFeaturedTour, getTourCount } from '../controllers/tourController.js';
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// create new tour
router.post('/', verifyAdmin, createTour);

// update new tour
router.put('/:id', verifyAdmin, updateTour);

// delete new tour
router.delete('/:id', verifyAdmin, deleteTour);

// getSingle new tour
router.get('/:id', getSingleTour);

// getAll new tour
router.get('/', getAllTour);

// getAll tour by search
router.get('/search/getTourBySearch', getTourBySearch);

// get featured tours
router.get('/search/getFeaturedTours', getFeaturedTour);

// get tour count
router.get('/search/getTourCount', getTourCount);

export default router;