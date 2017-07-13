import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { Location }                 from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Contacto }        from '../contactos/contacto.class';
import { ContactoService } from '../contactos/contacto.service';

@Component({
  selector: 'nuevo-contacto',
  templateUrl: './nuevo-contacto.component.html'
})
export class NuevoContactoComponent  implements OnInit {
  contacto:Contacto= new Contacto();

  constructor(  
      private contactoService: ContactoService,
        private location: Location,
        private route: ActivatedRoute
) { }

    ngOnInit(): void {
        this.route.paramMap
        .switchMap((params: ParamMap) => this.contactoService.getContacto(params.get('id'))) 
        .subscribe(contacto => this.contacto = contacto);
    }

    goBack(): void {
        this.location.back();
    }

    guardar(){  
        this.contactoService.create(this.contacto).then(respon=>this.goBack());
        console.log(this.contacto);
    }
}
