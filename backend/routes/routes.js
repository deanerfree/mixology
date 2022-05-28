const express = require("express")
const axios = require("axios")
const router = express.Router()
const { get_drinks } = require("../controller/controller")

router.use(express.json())
//GET request list of cocktails
router.get("/test", async (req, res) => {
	try {
		const listOfCocktails = "Hello"
		res.status(200).json(listOfCocktails)
	} catch (err) {
		res.status(404).json({ message: err.message })
	}
})
router.get("/drink", async (req, res) => {
	try {
		const drinks = await axios.get(
			"https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
		)
		console.log(drinks.data.drinks)
		res.send(drinks.data.drinks)
	} catch (err) {
		res.status(404).json({ message: err.message })
	}
})
//POST request for creating a new cocktail
// router.post("/newCocktail", cocktailController.createCocktails)

module.exports = router
