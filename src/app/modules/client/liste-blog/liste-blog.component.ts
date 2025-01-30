import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-liste-blog',
  standalone: true,
    imports: [
        RouterLink
    ],
  templateUrl: './liste-blog.component.html',
  styleUrl: './liste-blog.component.css'
})
export class ListeBlogComponent {
  title:string = "Santé mentale : un pilier essentiel pour une vie équilibrée";
  description:string = "La santé mentale est une composante cruciale du bien-être général, mais elle reste souvent négligée ou stigmatisée. Elle concerne non seulement l'absence de troubles psychologiques, mais aussi la capacité à gérer le stress, à développer des relations saines et à vivre une vie épanouie. Dans un monde en constante évolution, il est plus important que jamais de comprendre, d'accepter et de promouvoir la santé mentale.";

// liste des articles
  blogs = [
    {
      id: 1,
      titre:"Santé mentale : un pilier essentiel pour une vie équilibrée",
      desc:"La santé mentale est une composante cruciale du bien-être général, mais elle reste souvent négligée ou stigmatisée. Elle concerne non seulement l'absence de troubles psychologiques, mais aussi la capacité à gérer le stress, à développer des relations saines et à vivre une vie épanouie. Dans un monde en constante évolution, il est plus important que jamais de comprendre, d'accepter et de promouvoir la santé mentale.",
      image:"/images/dep.jpg",
    },
    {
      id: 2,
      titre:"La méditation pour soulager l'esprit",
      desc:"La santé mentale est une composante cruciale du bien-être général, mais elle reste souvent négligée ou stigmatisée. Elle concerne non seulement l'absence de troubles psychologiques, mais aussi la capacité à gérer le stress, à développer des relations saines et à vivre une vie épanouie. Dans un monde en constante évolution, il est plus important que jamais de comprendre, d'accepter et de promouvoir la santé mentale.",
      image:"/images/dep.jpg",
    },
    {
      id: 3,
      titre:"Santé mentale : un pilier essentiel pour une vie équilibrée",
      desc:"La santé mentale est une composante cruciale du bien-être général, mais elle reste souvent négligée ou stigmatisée. Elle concerne non seulement l'absence de troubles psychologiques, mais aussi la capacité à gérer le stress, à développer des relations saines et à vivre une vie épanouie. Dans un monde en constante évolution, il est plus important que jamais de comprendre, d'accepter et de promouvoir la santé mentale.",
      image:"/images/dep.jpg",
    }
  ]

    Rechercher() {

    }


}
