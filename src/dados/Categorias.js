export default class Categorias{

  constructor(){
    this.categorias = [];
    this._inscritos = [];
  }

  inscrever(func){
    this._inscritos.push(func);
  }

  notificar(func){
    this._inscritos.forEach(func => {
      func(this.categorias);
    });
  }

  adicionarCategoria(novaCategoria){
    this.categorias.push(novaCategoria);
  }
}