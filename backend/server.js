require("dotenv").config();
const express = require("express");
const favoritesRoutes = require("./routes/favorites"); 
const app = express();
const port = process.env.PORT || 4500;

app.use(express.json()); 

app.get("/api/health", (req, res) => {
	res.status(200).json({ success: true });
});

app.use('/api/favorites', favoritesRoutes); 

app.listen(port, () => {
	console.log("====================================");
	console.log(` Server running on:`);
	console.log(`   Local:   http://localhost:${port}`);
	console.log("====================================");
});