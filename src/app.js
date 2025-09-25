import http from "http";
import { PanRepository } from "./repositories/panRepository.js";
import { PanService } from "./services/panService.js";
import { PanController } from "./controllers/panController.js";


const repository = new PanRepository();
const service = new PanService(repository);
const controller = new PanController(service);

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/panes") {
    controller.getPanes(res);
  } else if (req.method === "POST" && req.url === "/panes") {
    controller.createPan(req, res);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Ruta no encontrada");
  }
});

server.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});
