const jwt = require("jsonwebtoken");

const SECRET_KEY = "FASTQWFGSADH";

function generateToken(payload) {
	return jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
}

function verifyToken(token) {
	try {
		return jwt.verify(token, SECRET_KEY);
	} catch (error) {
		return error;
	}
}

module.exports = { generateToken, verifyToken };
