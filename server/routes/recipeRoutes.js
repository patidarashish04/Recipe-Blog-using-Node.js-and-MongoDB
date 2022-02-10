const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');


router.get('/', recipeController.homepage)
router.get('/Recipe/:id', recipeController.exploreRecipe);
router.get('/Categories', recipeController.exploreCategories)
router.get('/Categories/:id', recipeController.exploreCategoriesById);
router.post('/Search', recipeController.searchRecipe);
router.get('/explore-latest', recipeController.exploreLatest);
router.get('/explore-random', recipeController.exploreRandom);

router.get('/submit-recipe', recipeController.submitRecipe);
router.post('/submit-recipe', recipeController.submitRecipeOnPost);

 

module.exports = router;    