"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Direccion = void 0;
class Direccion {
    constructor(calle, numero, piso, letra, codPostal, poblacion, provincia) {
        this._calle = calle;
        this._numero = numero;
        this._piso = piso;
        this._letra = letra;
        this._codPostal = codPostal;
        this._poblacion = poblacion;
        this._provincia = provincia;
    }
    toString() {
        return `${this._calle}, ${this._numero} ${this._piso}º ${this._letra} ${this._codPostal} ${this._poblacion} (${this._provincia})`;
    }
    set calle(calle) {
        this._calle = calle;
    }
    set numero(numero) {
        this._numero = numero;
    }
    set piso(piso) {
        this._piso = piso;
    }
    set letra(letra) {
        this._letra = letra;
    }
    set codPostal(codPostal) {
        this._codPostal = codPostal;
    }
    set poblacion(poblacion) {
        this._poblacion = poblacion;
    }
    set provincia(provincia) {
        this._provincia = provincia;
    }
    get calle() {
        return this._calle;
    }
    get numero() {
        return this._numero;
    }
    get piso() {
        return this._piso;
    }
    get letra() {
        return this._letra;
    }
    get codPostal() {
        return this._codPostal;
    }
    get poblacion() {
        return this._poblacion;
    }
    get provincia() {
        return this._provincia;
    }
}
exports.Direccion = Direccion;
