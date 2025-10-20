const { db } = require("../config/db.js");
const { favoritesTable } = require("../models/schema");
const { eq, and } = require("drizzle-orm"); 

const toAdd = async (req, res) => {
	try {
		const { userId, recipeId, title, image, cookTime, servings } = req.body;

		if (!userId || !recipeId || !title) {
			return res.status(400).json({ error: "Missing required fields" });
		}

		const newFavorite = await db
			.insert(favoritesTable)
			.values({
				userId,
				recipeId,
				title,
				image,
				cookTime,
				servings,
			})
			.returning();

		res.status(201).json(newFavorite[0]);
	} catch (error) {
		console.log("Error adding favorite", error);
		res.status(500).json({ error: "Something went wrong" });
	}
};

const getByUser = async (req, res) => {
	try {
		const { userId } = req.params;

		console.log('=============userId=======================');
		console.log(userId);
		console.log('====================================');
		
		const userFavorites = await db
			.select()
			.from(favoritesTable)
			.where(eq(favoritesTable.userId, userId));

		res.status(200).json(userFavorites);
	} catch (error) {
		console.log("Error fetching the favorites", error);
		res.status(500).json({ error: "Something went wrong" });
	}
};

const getOneByuser = async (req, res) => {
	try {
		const { userId, recipeId } = req.params;

		await db
			.delete(favoritesTable)
			.where(
				and(
					eq(favoritesTable.userId, userId),
					eq(favoritesTable.recipeId, parseInt(recipeId))
				)
			);

		res.status(200).json({ message: "Favorite removed successfully" });
	} catch (error) {
		console.log("Error removing a favorite", error);
		res.status(500).json({ error: "Something went wrong" });
	}
};

module.exports = {
	toAdd,
	getByUser,
	getOneByuser
};