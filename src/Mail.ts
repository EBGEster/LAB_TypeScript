export class Mail {
  private _tipo: string;
  private _direccion: string;

  constructor(tipo: string, direccion: string) {
      this._tipo = tipo;
      this._direccion = direccion;
  }

  public toString() {
    return `${this._tipo}: ${this._direccion}` 
  }

  //getters

  get tipo(){
      return this._tipo
  }
  get direccion(){
      return this._direccion
  }

  //setters

  set tipo(tipo: string){
      this._tipo = tipo
  }
  set direccion(direccion: string){
      this._direccion = direccion
  }
}