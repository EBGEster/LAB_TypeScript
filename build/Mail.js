"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mail = void 0;
class Mail {
    constructor(tipo, direccion) {
        this._tipo = tipo;
        this._direccion = direccion;
    }
    toString() {
        return `${this._tipo}: ${this._direccion}`;
    }
    get tipo() {
        return this._tipo;
    }
    get direccion() {
        return this._direccion;
    }
    set tipo(tipo) {
        this._tipo = tipo;
    }
    set direccion(direccion) {
        this._direccion = direccion;
    }
}
exports.Mail = Mail;
