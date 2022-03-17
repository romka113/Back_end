import { server } from "./lib/server.js";
const app = {};
app.init = () => {
  //pasiruosti pradinius folderius
  //pasiruosti pradinius failus
  //prisijungimas prieDB(duomenu baze)
  //uzkurti pati serveri (musu programa)
  server.init();
  //regulairiu procesu praleidimas
  //istrinti senus neberikalingus falus
  //maziau naudojamu failu archivavimas
  //atsinaujitnit informacija per is API
};
app.init();
export { app };
