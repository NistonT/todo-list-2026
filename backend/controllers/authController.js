const { getUsers, saveUser } = require("./../utils/db");
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

module.exports = { register, login };
