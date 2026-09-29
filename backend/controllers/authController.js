const { getUsers, saveUser, updateUser, deleteUser } = require("./../utils/db");
const { isLoginExists, isPasswordValid } = require("./../utils/validation");
const { generateToken } = require("./../utils/jwt");

function register(req, res) {
	const { login, password, role } = req.body;

	if (isLoginExists(login)) {
		return res
			.status(409)
			.json({ status: 409, message: "Такой логин уже существует" });
	}

	if (!isPasswordValid(password)) {
		return res.status(400).json({
			status: 400,
			message: "Пароль не соответствует требованиям безопасности",
		});
	}

	try {
		const newUser = { login, password, role };

		const savedUser = saveUser(newUser);

		const access_token = generateToken({
			login: savedUser.login,
			id: savedUser.id,
		});

		res.status(201).json({ access_token, user: savedUser });
	} catch (error) {
		console.error("Ошибка регистрации:", error);
		res.status(500).json({
			status: 500,
			message: "Ошибка сервера при сохранении пользователя",
		});
	}
}

function login(req, res) {
	const { login, password } = req.body;
	const data = getUsers();

	const user = data.users.find(
		u => u.login === login && u.password === password,
	);

	if (!user) {
		return res
			.status(401)
			.json({ status: 401, message: "Неверный логин или пароль" });
	}

	const access_token = generateToken({ login: user.login, id: user.id });

	res.status(200).json({ access_token, user_data: user });
}

function update(req, res) {
	const { id } = req.params;
	const { login, password, role } = req.body;

	const data = getUsers();
	const userExists = data.users.some(u => u.id === Number(id));

	if (!userExists) {
		return res
			.status(404)
			.json({ status: 404, message: "Пользователь не найден" });
	}

	if (login) {
		const loginTaken = data.users.some(
			u => u.login === login && u.id !== Number(id),
		);
		if (loginTaken) {
			return res
				.status(409)
				.json({ status: 409, message: "Такой логин уже занят" });
		}
	}

	if (password && !isPasswordValid(password)) {
		return res.status(400).json({
			status: 400,
			message: "Пароль не соответствует требованиям безопасности",
		});
	}

	const updates = {};
	if (login) updates.login = login;
	if (password) updates.password = password;
	if (role) updates.role = role;

	if (Object.keys(updates).length === 0) {
		return res
			.status(400)
			.json({ status: 400, message: "Нет данных для обновления" });
	}

	try {
		const updatedUser = updateUser(id, updates);
		res
			.status(200)
			.json({ message: "Пользователь обновлён", user: updatedUser });
	} catch (error) {
		console.error("Ошибка обновления:", error);
		res
			.status(500)
			.json({ status: 500, message: "Ошибка сервера при обновлении" });
	}
}

function remove(req, res) {
	const { id } = req.params;

	try {
		const success = deleteUser(id);

		if (!success) {
			return res
				.status(404)
				.json({ status: 404, message: "Пользователь не найден" });
		}

		res.status(200).json({ message: "Пользователь удалён" });
	} catch (error) {
		console.error("Ошибка удаления:", error);
		res
			.status(500)
			.json({ status: 500, message: "Ошибка сервера при удалении" });
	}
}

module.exports = { register, login, update, remove };
