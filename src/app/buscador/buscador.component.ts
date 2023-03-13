import { Component } from '@angular/core';


import { WikipediaService } from '../wikipedia.service'
@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent {
  titulos: String[] | undefined
  contribuidores: any [] | undefined
  constructor(public servicio: WikipediaService ){}
 
  buscar(){
    let input: any = document.getElementById('buscador');
  
    let url: string = "https://es.wikipedia.org/w/api.php?action=opensearch&search="+input.value+"&limit=10&namespace=0&format=json&origin=*";
   
    this.servicio.getLista(url).subscribe(titulos => {
      console.log(titulos)
      this.titulos = titulos[1]
    });
    
  }
  verContribuidores(titulo: String){
    console.log(titulo)
    let url: string = "https://es.wikipedia.org/w/api.php?action=query&prop=contributors&titles="+titulo+"&format=json&origin=*";
    this.servicio.verContribuidores(url).subscribe(contribuidores => {
      console.log(contribuidores)
      this.contribuidores = contribuidores.query.pages[15312].contributors;
      //const contributors = data.query.pages[15312].contributors;
      
    });
  }
}
