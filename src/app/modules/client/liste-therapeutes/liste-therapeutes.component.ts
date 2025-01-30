import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-liste-therapeutes',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule
],
  templateUrl: './liste-therapeutes.component.html',
  styleUrl: './liste-therapeutes.component.css'
})
export class ListeTherapeutesComponent {
  // Liste des médecins
  medecins = [
    {
      id: 1,
      nom: 'Dr. Marie Dupont',
      description: 'Psychologue spécialisée en thérapie cognitivo-comportementale avec 10 ans d\'expérience.',
      disponibilite: 'Lundi - Vendredi',
      specialite: 'psychologue',
      tarif: 80000,
      note: 3,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxQwz5x3p6TU76GAcOm3-NIUIG8NVeE9Ikjg&s',
    },
    {
      id: 2,
      nom: 'Dr. Jean Martin',
      description: 'Psychiatre avec expertise en gestion du stress et troubles de l\'anxiété.',
      disponibilite: 'Aujourd\'hui',
      specialite: 'psychiatre',
      tarif: 100000,
      note: 4,
      image: 'https://psyberri.com/wp-content/uploads/2019/05/Francois.jpg',
    },
    {
      id: 3,
      nom: 'Dr. Clara Lefèvre',
      description: 'Psychologue spécialisée en thérapie de couple et gestion des émotions.',
      disponibilite: 'Cette semaine',
      specialite: 'psychologue',
      tarif: 90000,
      note: 3.5,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0SNMzhsLUNqwjj1qH9U_XVo2Znycv4pdagg&s',
    },
  ];

  // Variables pour le filtrage
  searchQuery: string = '';
  selectedSpecialite: string = '';
  selectedDisponibilite: string = '';
  maxTarif: number = 500000;

  // Liste des médecins affichés après filtrage
  filteredMedecins = [...this.medecins];

  constructor() {
    this.applyFilters();
  }

  // Appliquer les filtres à la liste des médecins
  applyFilters() {
    this.filteredMedecins = this.medecins.filter(medecin => {
      return (
        (this.searchQuery === '' || medecin.nom.toLowerCase().includes(this.searchQuery.toLowerCase())) &&
        (this.selectedSpecialite === '' || medecin.specialite === this.selectedSpecialite) &&
        (this.selectedDisponibilite === '' || medecin.disponibilite === this.selectedDisponibilite) &&
        (medecin.tarif <= this.maxTarif)
      );
    });
  }

  // Générer les étoiles pour l'affichage de la note
  getStarsArray(note: number): boolean[] {
    return Array.from({ length: 5 }, (_, i) => i < note);
  }
}
