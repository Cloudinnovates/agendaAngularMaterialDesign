import { Component, OnInit } from '@angular/core';

import { Contacto }        from '../contactos/contacto.class';
import { ContactoService } from '../contactos/contacto.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  contactos: Contacto[] = [];

  constructor(private contactoService: ContactoService) { }

  ngOnInit(): void {
      this.findAll();
  }

  findAll(){
     this.contactoService.getContactos()
      .then(response => this.contactos = response ) 
  }
  call(contacto : Contacto){
      alert("Llamando a "+contacto.name);
  }

  borrar(contacto:Contacto){
      console.log("contacto id", contacto);
      this.contactoService.delete(contacto.id).then(res=>this.findAll());
  }
}
