import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { Vehicule } from './vehicule';
import { Router } from '@angular/router';

const HOST = 'http://localhost:8080/vehicule';

@Injectable()
export class VehiculeService {

  constructor(private http: HttpClient,
              private router: Router) { }

  getListVehicule(): Observable<Vehicule[]> {
    return this.http.get(`${HOST}/list`) as Observable<Vehicule[]>;
  }

  getVehicule(id): Observable<Vehicule> {
    return this.http.get(`${HOST}/detail/${id}`) as Observable<Vehicule>;
  }

  createVehicule(vehicule: Vehicule): Observable<Vehicule> {
    return this.http.post<Vehicule>(`${HOST}/create`, vehicule);
  }

  updateVehicule(vehicule: Vehicule): Observable<Vehicule> {
    return this.http.put(`${HOST}/edit/${vehicule.id_vehicule}`, vehicule) as Observable<Vehicule>;
  }

  deleteVehicule(id: number): any {
    return this.http.delete<any>(`${HOST}/delete/${id}`);
  }
}
