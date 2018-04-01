import { Component, OnInit } from '@angular/core';
import { VehiculeService } from '../vehicule.service';
import { Vehicule } from '../vehicule';

@Component({
  selector: 'app-list-vehicule',
  templateUrl: './list-vehicule.component.html',
  styleUrls: ['./list-vehicule.component.css']
})
export class ListVehiculeComponent implements OnInit {

  id: number;
  listVehicule: Vehicule[] = [];

  constructor(private vehiculeService: VehiculeService) { }

  ngOnInit() {
    this.vehiculeService.getListVehicule().subscribe( listVehicule => this.listVehicule = listVehicule,
    err => { console.log(err); }
    );
  }
}
