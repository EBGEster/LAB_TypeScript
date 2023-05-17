"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Telefono = void 0;
class Telefono {
    constructor(tipo, numero) {
        this._tipo = tipo;
        this._numero = numero;
    }
    toString() {
        return `${this._tipo}: ${this._numero}`;
    }
    get tipo() {
        return this._tipo;
    }
    get numero() {
        return this._numero;
    }
    set tipo(tipo) {
        this._tipo = tipo;
    }
    set numero(numero) {
        this._numero = numero;
    }
}
exports.Telefono = Telefono;
