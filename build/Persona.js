"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    constructor(nombre, apellidos, edad, dni, cumple, colorFav, sexo, direcciones, mails, telefonos, notas) {
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._edad = edad;
        this._dni = dni;
        this._cumple = cumple;
        this._colorFav = colorFav;
        this._sexo = sexo;
        this._direcciones = direcciones;
        this._mails = mails;
        this._telefonos = telefonos;
        this._notas = notas;
    }
    toString() {
        let printList = (array) => {
            let i = 0;
            return array.map(e => `    ${++i}: ${e}`).join('\n');
        };
        return `${this._nombre} ${this._apellidos}\n  Sexo: ${this._sexo}\n  Fecha nacimiento: ${this._cumple}, ${this._edad} años\n  DNI: ${this._dni}\n  Dirección(es):\n${printList(this._direcciones)}\n  Teléfono(s):\n${printList(this._telefonos)}\n  E-mail(s):\n${printList(this._mails)}\n  Color favorito: ${this._colorFav}\n  Info. adicional: ${this._notas}`;
    }
    addMail(mail) {
        this._mails.push(mail);
    }
    addPhone(phone) {
        this._telefonos.push(phone);
    }
    addAddress(address) {
        this._direcciones.push(address);
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    set apellidos(apellidos) {
        this._apellidos = apellidos;
    }
    set edad(edad) {
        this._edad = edad;
    }
    set dni(dni) {
        this._dni = dni;
    }
    set cumple(cumple) {
        this._cumple = cumple;
    }
    set colorFav(colorFav) {
        this._colorFav = colorFav;
    }
    set sexo(sexo) {
        this._sexo = sexo;
    }
    set direcciones(direcciones) {
        this._direcciones = direcciones;
    }
    set mails(mails) {
        this._mails = mails;
    }
    set telefonos(telefonos) {
        this._telefonos = telefonos;
    }
    set notas(notas) {
        this._notas = notas;
    }
    get nombre() {
        return this._nombre;
    }
    get apellidos() {
        return this._apellidos;
    }
    get edad() {
        return this._edad;
    }
    get dni() {
        return this._dni;
    }
    get cumple() {
        return this._cumple;
    }
    get colorFav() {
        return this._colorFav;
    }
    get sexo() {
        return this._sexo;
    }
    get direcciones() {
        return this._direcciones;
    }
    get telefonos() {
        return this._telefonos;
    }
    get mails() {
        return this._mails;
    }
    get notas() {
        return this._notas;
    }
}
exports.Persona = Persona;
