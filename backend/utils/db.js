const fs = require("fs");
const path = require("path");

const DB_PATH = path.join(__dirname, "..", "users.json");

function getUsers() {
	const data = fs.readFileSync(DB_PATH, "utf-8");
	return JSON.parse(data);
}

function saveUser(newUser) {
	const data = getUsers();

	const lastId =
		data.users.length > 0 ? data.users[data.users.length - 1].id : 0;
	newUser.id = lastId + 1;

	data.users.push(newUser);
	fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), "utf-8");

	return newUser;
}

module.exports = { getUsers, saveUser };
