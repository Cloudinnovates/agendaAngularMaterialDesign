import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Contacto } from './contacto.class';


@Injectable()
export class ContactoService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private heroesUrl = 'http://localhost:8080/contactos';  // URL to web api

  constructor(private http: Http) { }

  getContactos(): Promise<Contacto[]> {
    return this.http.get(this.heroesUrl)
               .toPromise()
               .then(response => response.json()._embedded.contactos as Contacto[])
               .catch(this.handleError);
  }


  getContacto(id: string): Promise<Contacto> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Contacto)
      .catch(this.handleError);
  }

  delete(id: string): Promise<void> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(contacto: Contacto): Promise<any> {
    return this.http
      .post(this.heroesUrl, JSON.stringify(contacto), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Contacto)
      .catch(this.handleError);
  }

  update(contacto: Contacto): Promise<any> {
    const url = `${this.heroesUrl}/${contacto.id}`;
    return this.http
      .put(url, JSON.stringify(contacto), {headers: this.headers})
      .toPromise()
      .then(() => contacto)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

