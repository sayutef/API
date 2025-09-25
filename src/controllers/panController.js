
import { panView } from "../views/panView.js";

export class PanController {
  constructor(service) {
    this.service = service;
  }

 
  getPanes(res) {
    const panes = this.service.getAllPanes();
    const salida = panView.render(panes);

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(salida);
  }

  
  createPan(req, res) {
    let body = "";

    req.on("data", chunk => {
      body += chunk.toString();
    });

    req.on("end", () => {
      try {
        const data = JSON.parse(body);
        const pan = this.service.createPan(data);
        const salida = panView.render(pan);

        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(salida);
      } catch (error) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: error.message }));
      }
    });
  }
}
