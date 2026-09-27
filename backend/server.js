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
