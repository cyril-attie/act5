import { Component } from '@angular/core';
import { Noticia } from 'src/app/interfaces/noticia.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
    
    nuevaNoticiaTitulo:string="";
    nuevaNoticiaImagen:string="";
    nuevaNoticiaTexto:string="";
    newsListHTML:string = "";
    contadorDeIdentificador : number= 3;
    noticias : Noticia[]=[
        {
        id:1,
        title: 'la plataforma para crear escuelas ya está disponible.',
        imageUrl: 'https://s32659.pcdn.co/wp-content/uploads/2022/07/school-metaverse-ink-850x478.jpeg.optimal.jpeg',
        body: 'las escuelas públicas están bien pero faltan diversidad. las escuelas privadas están sobre encarecidad. para llenar este vacío entre público y privado, la plataforma unschool permite a los usuarios crear una nueva escuela en poco tiempo ya que es un centro de atracción donde los mejores profesores pueden subastar sus clases.',
         updated:new Date("2023-02-16t13:51:13.310z")
        },
        {
            id:2,
            title:'neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..',
            imageUrl:'https://placeholder.com/assets/images/150x150-2-500x500.png',
            body:'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
            updated:new Date(),
        }
    ];

   pintarNoticias() : void {
        this.newsListHTML = "";
        this.noticias.forEach(noticia => {
        this.newsListHTML+=`
        <li class="news" id=news${noticia.id}>
        <h1>${noticia.title}</h1>
        <h6>Last updated on ${noticia.updated}</h6>
        <img src="${noticia.imageUrl}">
        <p>${noticia.body}</p>
        </li>
        `
        });
    } 


    nuevaNoticia($event : any):void {
        
        if (this.nuevaNoticiaTitulo=="") {alert('Titulo no puede estar vacío.'); throw new Error('Titulo vacio')};
        if (this.nuevaNoticiaImagen=="") {alert('Url de imagen no puede estar vacía.'); throw new Error('Titulo vacio');};;
        if (this.nuevaNoticiaTexto=="") {alert('Texto de noticia no puede estar vacío.'); throw new Error('Titulo vacio');};
        
        let nueva: Noticia= {
            id:this.contadorDeIdentificador++,
            title:this.nuevaNoticiaTitulo,
            imageUrl:this.nuevaNoticiaImagen,
            body: this.nuevaNoticiaTexto,
            updated:new Date()
        }
        this.noticias.push(nueva);
        this.pintarNoticias();
        this.nuevaNoticiaTitulo="";
        this.nuevaNoticiaImagen="";
        this.nuevaNoticiaTexto="";
        $event.preventDefault();
    
    }

    ngOnInit() : void {
   
        this.pintarNoticias(); 
        console.log(this.newsListHTML);
    }
    

}
