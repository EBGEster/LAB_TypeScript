export class Direccion {
  private _calle: string;
  private _numero: number;
  private _piso: number;
  private _letra: string;
  private _codPostal: number;
  private _poblacion: string;
  private _provincia: string;

  constructor(calle: string, numero: number, piso: number, letra: string, codPostal: number,
              poblacion: string, provincia: string){
    this._calle =  calle;
    this._numero =  numero;
    this._piso = piso;
    this._letra = letra;
    this._codPostal = codPostal;
    this._poblacion = poblacion;
    this._provincia = provincia;

  }

  public toString() {
    return `${this._calle}, ${this._numero} ${this._piso}º ${this._letra} ${this._codPostal} ${this._poblacion} (${this._provincia})`
  }
// setters

  public set calle(calle: string){
      this._calle = calle
  }
  public set numero(numero: number){
      this._numero = numero
  }
  public set piso(piso: number){
      this._piso = piso
  }
  public set letra(letra: string){
      this._letra = letra
  }
  public set codPostal(codPostal: number){
      this._codPostal = codPostal
  }
  public set poblacion(poblacion: string){
      this._poblacion = poblacion
  }
  public set provincia(provincia: string){
      this._provincia = provincia
  }

  //getters

  public get calle(){
      return this._calle
  }
  public get numero(){
      return this._numero
  }
  public get piso(){
      return this._piso
  }
  public get letra(){
      return this._letra
  }
  public get codPostal(){
      return this._codPostal
  }
  public get poblacion(){
      return this._poblacion
  }
  public get provincia(){
      return this._provincia
  }  
}