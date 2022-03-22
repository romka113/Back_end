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
    console.log("Uzklausa pilnai gauta ziurim ko nori knlientas");
    const HTML = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>Labas ka tu </h1>
        <p>PSL: ${trimmedPath}</p>
    </body>
    </html>`;
    res.end(HTML);
  });
});
server.init = () => {
  console.log("ei leidziu serveri.. ");
  server.httpServer.listen(3000, () => {
    console.log("Tavo serveris sukasi ant http://localhost:3000");
  });
};
export { server };
