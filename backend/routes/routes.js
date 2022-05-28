const express = require("express")
const router = express.Router()

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
//POST request for creating a new cocktail
// router.post("/newCocktail", cocktailController.createCocktails)

module.exports = router
