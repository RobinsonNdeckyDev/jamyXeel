import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-details-therapeute',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details-therapeute.component.html',
  styleUrl: './details-therapeute.component.css'
})
export class DetailsTherapeuteComponent {
  // Définir une variable pour stocker les détails du thérapeute
  therapeute: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Récupérer l'ID du thérapeute à partir des paramètres de l'URL
    const id = this.route.snapshot.paramMap.get('id');
    this.getDetails(id); 
    // Remplacer cette ligne avec une méthode pour récupérer les détails

  }

  // Méthode pour simuler la récupération des données du thérapeute
  getDetails(id: string | null): void {
    // Simulez une récupération de données à partir d'une API ou d'une source de données.

    // Ici, on va juste utiliser une liste d'exemple.
    const allTherapeutes = [
      { id: '1', nom: 'Dr. Marie Dupont', description: 'Psychologue spécialisée en thérapie cognitivo-comportementale...', disponibilite: 'Lundi - Vendredi', note: 4.5, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxQwz5x3p6TU76GAcOm3-NIUIG8NVeE9Ikjg&s' },
      { id: '2', nom: 'Dr. Jean Martin', description: 'Psychiatre avec expertise en gestion du stress...', disponibilite: 'Lundi - Vendredi', note: 4.0, image: 'https://psyberri.com/wp-content/uploads/2019/05/Francois.jpg' },
      { id: '3', nom: 'Dr. Clara Lefèvre', description: 'Psychologue spécialisée en thérapie de couple...', disponibilite: 'Lundi - Vendredi', note: 3.5, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0SNMzhsLUNqwjj1qH9U_XVo2Znycv4pdagg&s' }
    ];

    this.therapeute = allTherapeutes.find(t => t.id === id);
  }
  // Méthode pour obtenir un tableau d'étoiles basé sur la note
  getStarsArray(rating: number): boolean[] {
    const fullStars = Math.floor(rating); // Nombre d'étoiles pleines
    const halfStar = rating % 1 !== 0; // Vérifier s'il y a une demi-étoile
    const stars = Array(5).fill(false);

    for (let i = 0; i < fullStars; i++) {
      stars[i] = true; // Marquer les étoiles pleines
    }

    if (halfStar) {
      stars[fullStars] = null; // Demi-étoile
    }

    return stars;
  }
}
