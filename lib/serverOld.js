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
    // const contentHTML = server.routes[trimmedPath]
    //   ? server.routes[trimmedPath]
    //   : server.routes[404];
    let contentHTML = server.routes[404];
    if (server.routes[trimmedPath]) {
      contentHTML = server.routes[trimmedPath];
    }
    const HTML = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
      <header>
        <img src="#" alt="Logo">
        <nav>
          <a href="register">Register</a>
          <a href="login">Login</a>
        </nav>
      </header>
      <main>
        ${contentHTML}
      </main>
        <footer>
          Copyright &copy; 2022
        </footer>
    </body>
    </html>`;

    res.end(HTML);
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
