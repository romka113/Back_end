import http from "http";
import { utils } from "./utils.js";
import { PageHome } from "../pages/PageHome.js";
import { Page404 } from "../pages/Page404.js";
import { PageLogin } from "../pages/PageLogin.js";
import { PageRegister } from "../pages/PageRegister.js";
import { PageTemplate } from "./PageTemplate.js";
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
    const textFileExtensions = ["css", "js", "svg"];

    const binaryFileExtesnions = [
      "png",
      "jpg",
      "ico",
      "eot",
      "ttf",
      "woff",
      "woff2",
      "otf",
    ];
    let responeContent = "";

    const fileExtension = utils.fileExtension(trimmedPath); //reikia rei isskaiciuoti is trimpath
    const isTextFile = textFileExtensions.includes(fileExtension);
    const isBinaryFile = binaryFileExtesnions.includes(fileExtension);
    const isAPI = trimmedPath.split("/")[0] === "api";
    const isPage = !isTextFile && !isBinaryFile && !isAPI;
    if (isTextFile) {
      responeContent = "TEXT FILE CONTENT";
    }
    if (isBinaryFile) {
      responeContent = "Binary FILE CONTENT";
    }
    if (isAPI) {
      responeContent = "API FILE CONTENT";
    }

    if (isPage) {
      let pageClass = server.routes["404"];
      if (server.routes[trimmedPath]) {
        pageClass = server.routes[trimmedPath];
      }
      const pageObj = new pageClass();
      responeContent = pageObj.render();
    }

    res.end(responeContent);
  });
});
server.routes = {
  "": PageHome,
  404: Page404,
  register: PageRegister,
  login: PageLogin,
  // blog: "blog HTML",
};
server.init = () => {
  console.log("ei leidziu serveri.. ");
  server.httpServer.listen(3000, () => {
    console.log("Tavo serveris sukasi ant http://localhost:3000");
  });
};
export { server };
