import {Direccion} from './Direccion'
import {Telefono} from './Telefono'
import {Mail} from './Mail'


export class Persona {
  private _nombre: string;
  private _apellidos: string;
  private _edad: number;
  private _dni: string;
  private _cumple: string;
  private _colorFav: string;
  private _sexo: string;
  private _direcciones: Array<Direccion>;
  private _mails: Array<Mail>;
  private _telefonos: Array<Telefono>;
  private _notas: string;

  constructor(nombre: string, apellidos: string, edad: number, dni: string,
              cumple: string, colorFav: string, sexo: string, 
              direcciones: Array<Direccion>, mails: Array<Mail>, 
              telefonos: Array<Telefono>, notas: string) {

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

  public toString() {
    let printList = (array: Array<any>):string => {
        let i = 0;
        return array.map(e => `    ${++i}: ${e}`).join('\n')
    }
        

    return `${this._nombre} ${this._apellidos}\n  Sexo: ${this._sexo}\n  Fecha nacimiento: ${this._cumple}, ${this._edad} años\n  DNI: ${this._dni}\n  Dirección(es):\n${printList(this._direcciones)}\n  Teléfono(s):\n${printList(this._telefonos)}\n  E-mail(s):\n${printList(this._mails)}\n  Color favorito: ${this._colorFav}\n  Info. adicional: ${this._notas}`
  }

  public addMail(mail: Mail) {
    this._mails.push(mail)
  }

  public addPhone(phone: Telefono) {
    this._telefonos.push(phone)
  }

  public addAddress(address: Direccion) {
    this._direcciones.push(address)
  }

  //setters

  public set nombre(nombre: string) {
    this._nombre = nombre
  }
  public set apellidos(apellidos: string) {
    this._apellidos = apellidos
  }
  public set edad(edad: number) {
      this._edad = edad
  }
  public set dni(dni: string) {
      this._dni = dni
  }
  public set cumple(cumple: string) {
      this._cumple = cumple
  }
  public set colorFav(colorFav: string) {
      this._colorFav = colorFav
  }
  public set sexo(sexo: string) {
      this._sexo = sexo
  }
  public set direcciones(direcciones: Array<Direccion>) {
      this._direcciones = direcciones
  }
  public set mails(mails: Array<Mail>) {
      this._mails = mails
  }
  public set telefonos(telefonos: Array<Telefono>) {
      this._telefonos = telefonos
  }
  public set notas(notas: string) {
      this._notas = notas
  }

  // getters

  public get nombre(){
      return this._nombre
  }
  public get apellidos(){
      return this._apellidos
  }
  public get edad(){
      return this._edad
  }
  public get dni(){
      return this._dni
  }
  public get cumple(){
      return this._cumple
  }
  public get colorFav(){
      return this._colorFav
  }
  public get sexo(){
      return this._sexo
  }
  public get direcciones(){
      return this._direcciones
  }
  public get telefonos(){
      return this._telefonos
  }
  public get mails(){
      return this._mails
  }
  public get notas(){
      return this._notas
  }  


}

