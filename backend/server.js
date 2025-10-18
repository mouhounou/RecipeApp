require("dotenv").config();
const express = require("express");
const { route } = require("./routes/favorites");
const app = express();
const port = process.env.PORT || 4500;


app.get("/api/health", (req, res) => {
	res.status(200).json({ success: true });
});


app.use(express.json());

app.use('/api/favorites', route)

app.listen(port, () => {
	console.log("====================================");
	console.log(` Server running on:`);
	console.log(`   Local:   http://localhost:${port}`);
	console.log("====================================");
});
