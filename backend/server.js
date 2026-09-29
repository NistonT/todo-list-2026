const jsonServer = require("json-server");
const authRoutes = require("./routes/authRoutes");

const server = jsonServer.create();

server.use(jsonServer.defaults());

server.use(jsonServer.bodyParser);

server.use("/auth", authRoutes);

const PORT = 3000;
server.listen(PORT, () => {
	console.log(`Сервер успешно запущен на http://localhost:${PORT}`);
});

server.use((err, req, res, next) => {
	if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
		return res.status(400).json({
			status: 400,
			message: "Невалидный JSON в теле запроса",
		});
	}
	next(err);
});
