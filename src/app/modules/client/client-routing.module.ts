import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent} from "./accueil/accueil.component";
import { AboutComponent} from "./about/about.component";
import { ListeBlogComponent } from './liste-blog/liste-blog.component';
import { ListeTherapeutesComponent } from './liste-therapeutes/liste-therapeutes.component';
import { DetailsTherapeuteComponent } from './details-therapeute/details-therapeute.component';
import { DetailsBlogComponent } from './details-blog/details-blog.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: AccueilComponent},
  { path: 'accueil', component: AccueilComponent},
  { path: 'about', component: AboutComponent},
  { path: 'therapeutes', component: ListeTherapeutesComponent},
  { path: 'Blog', component: ListeBlogComponent},
  { path: 'detailTherapeute', component: DetailsTherapeuteComponent},
  { path: 'detailBlog', component: DetailsBlogComponent},
  { path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
