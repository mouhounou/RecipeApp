const {
	integer,
	pgTable,
	text,
	timestamp,
	serial,
} = require("drizzle-orm/pg-core");

const favoritesTable = pgTable("favorites", {
	id: serial("id").primaryKey(),
	userId: text("user_id").notNull(),
	recipeId: integer("recipe_id").notNull(),
	title: text("title").notNull(),
	image: text("image"),
	cookieTime: text("cookie_time"),
	serving: text("serving"),
	createdAt: timestamp("created_at").defaultNow(),
});

module.exports = { favoritesTable };
