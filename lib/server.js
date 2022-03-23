import { fdatasync } from "fs";
import http from "http";

const server = {};
server.httpServer = http.createServer((req, res) => {
  const baseURL = `http${req.socket.encryption ? "s" : ""}://${
    req.headers.host
  }`;
  const parsedURL = new URL(req.url, baseURL);
  const httpMethod = req.method.toLowerCase();
  const parsedPathName = parsedURL.pathname;
  const trimmedPath = parsedPathName.replace(/^\/+|\/+$/g, "");
  const header = req.headers;
  console.log("bando atidaryti...", trimmedPath);

  req.on("data", () => {
    console.log("klientas atsiunte duomenu,,,,");
  });
  req.on("end", () => {
    res.end("ATSAKYMAS");
  });
});
server.routes = {
  "": "home Html",
  404: "register HTML",
  register: "register HTMl",
  login: "login HTML",
  blog: "blog HTML",
};
server.init = () => {
  console.log("ei leidziu serveri.. ");
  server.httpServer.listen(3000, () => {
    console.log("Tavo serveris sukasi ant http://localhost:3000");
  });
};
export { server };
