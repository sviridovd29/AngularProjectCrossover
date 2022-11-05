import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AboutComponent } from './side-menu/content/about/about.component';
import { BmwComponent } from './side-menu/content/bmw/bmw.component';
import { AcuraComponent } from './side-menu/content/acura/acura.component';
import { LexusComponent } from './side-menu/content/lexus/lexus.component';
import { DodgeComponent } from './side-menu/content/dodge/dodge.component';
import { ContactsComponent } from './side-menu/content/contacts/contacts.component';
import { HeaderComponent } from './header/header.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { BackofficeRoutingModule } from './backoffice-routing.module';
import { BackofficeComponent } from './backoffice.component';
import { DndDirective } from './side-menu/content/contacts/dnd.directive';
import { UserInfoComponent } from './side-menu/content/contacts/user-info/user-info.component';





@NgModule({
  declarations: [
    AboutComponent,
    BmwComponent,
    AcuraComponent,
    LexusComponent,
    DodgeComponent,
    ContactsComponent,
    HeaderComponent,
    SideMenuComponent,
    BackofficeComponent,
    DndDirective,
    UserInfoComponent
  ],
  imports: [
    SharedModule,
    BackofficeRoutingModule
  ]
})
export class BackofficeModule { }
