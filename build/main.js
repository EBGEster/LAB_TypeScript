"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Persona_1 = require("./Persona");
const Direccion_1 = require("./Direccion");
const Telefono_1 = require("./Telefono");
const Mail_1 = require("./Mail");
let dir1 = new Direccion_1.Direccion("Calle Falsa", 123, 4, "A", 28055, "Springfield", "Madrid");
let dir2 = new Direccion_1.Direccion("Calle Me Falta Un Tornillo", 39, 5, "Q", 52001, "Valladolid", "Valladolid");
let dir3 = new Direccion_1.Direccion("Plaza Mayor", 65, 2, "B", 52001, "Madrid", "Madrid");
let dir4 = new Direccion_1.Direccion("Avenida Larga", 456, 3, "Q", 63541, "Gandía", "Valencia");
let dir5 = new Direccion_1.Direccion("Callejón Diagón", 1, 9, "Q", 52001, "Hogwarts", "Londres");
let phone1 = new Telefono_1.Telefono("movil", 656565656);
let phone2 = new Telefono_1.Telefono("fijo", 911666666);
let mail1 = new Mail_1.Mail("personal", "a@personal.com");
let mail2 = new Mail_1.Mail("trabajo", "b@empresa.com");
let agenda = [];
agenda.push(new Persona_1.Persona('Adela', 'Campos', 35, '12345678A', '12/10/1986', 'azul', 'mujer', [dir1, dir2], [mail1, mail2], [phone1, phone2], 'pelo rubio, nariz respingona'));
agenda.push(new Persona_1.Persona('Sofía', 'Loren', 21, '87654321Z', '25/02/2002', 'rosa', 'mujer', [dir3], [mail1, mail2], [phone1], 'actriz, morena'));
agenda.push(new Persona_1.Persona('Leo', 'DiCaprio', 48, '11223344Z', '11/11/1974', 'rojo', 'hombre', [dir4, dir5], [mail1, mail2], [phone1], 'actor, ganador de 1 Óscar'));
console.log('****** IMPRIMIENDO DATOS AGENDA ******');
agenda.forEach(element => {
    console.log(`${element}`);
});
let findDni = '11223344Z';
console.log(`****** BUSCANDO PERSONA CON DNI: ${findDni} ******`);
let laPersona = agenda.find((persona) => persona.dni === findDni);
console.log(`${laPersona}`);
console.log(`****** AÑADIENDO NUEVA INFO AL REGISTRO DE ${laPersona === null || laPersona === void 0 ? void 0 : laPersona.nombre} ******`);
laPersona === null || laPersona === void 0 ? void 0 : laPersona.addAddress(new Direccion_1.Direccion('Calle Desengaño', 25, 3, 'A', 28047, 'Madrid', 'Madrid'));
laPersona === null || laPersona === void 0 ? void 0 : laPersona.addPhone(new Telefono_1.Telefono('Personal', 696885520));
laPersona === null || laPersona === void 0 ? void 0 : laPersona.addMail(new Mail_1.Mail('Personal', 'leodicapriomolamazo@titanic.com'));
console.log('******IMPRIMIENDO DATOS AGENDA******');
agenda.forEach(element => {
    console.log(`${element}`);
});
