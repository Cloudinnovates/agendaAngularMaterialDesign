import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { MdListModule, MdButtonModule,MdIconModule, MdToolbarModule, MdTooltipModule, MdCheckboxModule, MdInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';


import { ContactoService} from './contactos/contacto.service';

import { AppComponent } from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { NuevoContactoComponent } from './nuevo-contacto/nuevo-contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NuevoContactoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    AppRoutingModule,
    MdListModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdIconModule, 
    MdToolbarModule,
    MdTooltipModule,
    MdCheckboxModule, 
    MdInputModule
  ],
  providers: [ContactoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
