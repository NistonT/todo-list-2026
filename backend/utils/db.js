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

function updateUser(id, updates) {
	const data = getUsers();
	const userIndex = data.users.findIndex(u => u.id === Number(id));

	if (userIndex === -1) {
		return null;
	}

	data.users[userIndex] = { ...data.users[userIndex], ...updates };
	fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), "UTF-8");

	return data.users[userIndex];
}

function deleteUser(id) {
	const data = getUsers();
	const userIndex = data.users.findIndex(u => u.id === Number(id));

	if (userIndex === -1) {
		return false;
	}

	data.users.splice(userIndex, 1);
	fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), "UTF-8");

	return true;
}

module.exports = { getUsers, saveUser, updateUser, deleteUser };
