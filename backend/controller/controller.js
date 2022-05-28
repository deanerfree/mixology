const get_drinks = async (req, res) => {
	try {
		;("www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
	} catch (err) {
		res.status(404).json({ message: err.message })
	}
}

exports = get_drinks
