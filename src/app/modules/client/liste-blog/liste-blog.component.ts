import {Component, EventEmitter, Output} from '@angular/core';
import {RouterLink} from "@angular/router";
import {DatePipe, NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-liste-blog',
  standalone: true,
    imports: [
        RouterLink,
        NgForOf,
        DatePipe,
        FormsModule
    ],
  templateUrl: './liste-blog.component.html',
  styleUrl: './liste-blog.component.css'
})
export class ListeBlogComponent {
  title:string = "Santé mentale : un pilier essentiel pour une vie équilibrée";
  description:string = "La santé mentale est une composante cruciale du bien-être général, mais elle reste souvent négligée ou stigmatisée. Elle concerne non seulement l'absence de troubles psychologiques, mais aussi la capacité à gérer le stress, à développer des relations saines et à vivre une vie épanouie. Dans un monde en constante évolution, il est plus important que jamais de comprendre, d'accepter et de promouvoir la santé mentale.";

// liste des articles
blogs: any[] = [
  {
    id: 1,
    title: 'Mon premier blog',
    content: 'Contenu détaillé du premier blog...',
      image: "assets/articles/image.png",
    date: new Date()
  },
  {
    id: 2,
    title: 'Un second article',
    content: 'Contenu du deuxième article...',
      image: "assets/articles/image 9.png",
    date: new Date()
  },
    {
        id: 3,
        title: 'Un autre article',
        content: 'Contenu du deuxième article...',
        image: "assets/articles/image-1.png",
        date: new Date()
    }
];

blog: any[] = [];

    getDetails(id: number) {
     
    }

    onSearche() {

    }
}
