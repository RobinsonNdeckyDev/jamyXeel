import { Injectable } from '@angular/core';

export interface MenuItem {
  title: string; // Titre du menu
  icon: string;  // Icône 
  route: string; // Route associée 
  access: string[]; // Rôles autorisés 
}

@Injectable({
  providedIn: 'root'
})

export class MenuService {

  private menus: MenuItem[] = [
    // Routes des menus admin
    { title: 'Accueil', icon: 'home', route: '/dashboard', access: ['admin', 'specialiste', 'patient'] },
    { title: 'Admin', icon: 'admin_panel_settings', route: '/dashboard/admin', access: ['admin'] },
    { title: 'Spécialiste', icon: 'medical_services', route: '/dashboard/specialiste', access: ['specialiste'] },
    { title: 'Patient', icon: 'person', route: '/dashboard/patient', access: ['patient'] },
    { title: 'Paramètres', icon: 'settings', route: '/dashboard/settings', access: ['admin', 'specialiste', 'patient'] },
    { title: 'Déconnexion', icon: 'logout', route: '/logout', access: ['admin', 'specialiste', 'patient'] }
  
    // Routes des menus du patient


    // Routes des menus du spécialiste
  ];

  constructor() { }
}
