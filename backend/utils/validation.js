const { getUsers } = require("./db");

function isLoginExists(login) {
	const data = getUsers();
	return data.users.some(user => user.login === login);
}

function isPasswordValid(password) {
	const regex =
		/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
	return regex.test(password);
}

module.exports = { isLoginExists, isPasswordValid };
