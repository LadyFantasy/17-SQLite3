const MensajesModel = require("../persistencia/mensajes");

class Mensajes {
  async listar() {
    const mensajes = await MensajesModel.listar();
    return mensajes;
  }

  async guardar(mensaje) {
    const mensajes = await MensajesModel.guardar(mensaje);
    return mensajes;
  }
}

module.exports = new Mensajes();

// const fs = require("fs");

// class Mensajes {
//   constructor() {
//     this.mensajes = [];
//   }

//   async leerMensajes() {
//     try {
//       let content = fs.readFileSync(__dirname + "/mensajesFile.txt", "utf-8");
//       if (content) {
//         this.mensajes = JSON.parse(content);
//       }
//       return this.mensajes;
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   agregarMensaje(mensaje) {
//     try {
//       this.mensajes.push(mensaje);
//       fs.writeFileSync(__dirname + "/mensajesFile.txt", JSON.stringify(this.mensajes, null, "\t"));
//       return this.mensajes;
//     } catch (error) {
//       return error;
//     }
//   }
// }

// module.exports = new Mensajes();
