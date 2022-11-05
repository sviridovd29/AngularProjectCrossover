import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BackofficeComponent } from "./backoffice.component";
import { AboutComponent } from "./side-menu/content/about/about.component";
import { AcuraComponent } from "./side-menu/content/acura/acura.component";
import { BmwComponent } from "./side-menu/content/bmw/bmw.component";
import { ContactsComponent } from "./side-menu/content/contacts/contacts.component";
import { DodgeComponent } from "./side-menu/content/dodge/dodge.component";
import { LexusComponent } from "./side-menu/content/lexus/lexus.component";


const routes: Routes = [
  {
    path: '', component: BackofficeComponent,
    children: [

      { path: 'bmw', component: BmwComponent},
      { path: 'acura', component: AcuraComponent},
      { path: 'lexus', component: LexusComponent},
      { path: 'dodge', component: DodgeComponent},
      { path: 'settings', component: ContactsComponent},
      { path: '', component: AboutComponent },
      { path: 'about', component: AboutComponent },
     
    ]
  },
]



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})

export class BackofficeRoutingModule { }



