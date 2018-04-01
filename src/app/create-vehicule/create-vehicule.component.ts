import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { VehiculeService } from '../vehicule.service';
import { Vehicule } from '../vehicule';
import { NgForm, FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-vehicule',
  templateUrl: './create-vehicule.component.html',
  styleUrls: ['./create-vehicule.component.css']
})

export class CreateVehiculeComponent implements OnInit {

  id: number;
  vehicule = new Vehicule ();
  editing: boolean;

  listTypeVehicule = [
    {value: 'voiture', viewValue: 'voiture'},
    {value: 'moto', viewValue: 'moto'},
    {value: 'scooter', viewValue: 'scooter'},
    {value: 'camion', viewValue: 'camion'},
    {value: 'camionnette', viewValue: 'camionnette'},
    {value: 'autocar', viewValue: 'autocar'}
  ];

  constructor(private vehiculeService: VehiculeService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
   const urlSegment = this.route.snapshot.url[0];
   console.log(urlSegment);
   if (urlSegment && urlSegment.path !== 'create') {
    this.id = +this.route.snapshot.paramMap.get('id');
      this.vehiculeService.getVehicule(this.id).subscribe(
        vehicule => this.vehicule = vehicule
      );
      this.editing = true;
      console.log(this.vehicule);
    } else {
      this.editing = false;
    }
  }

  onSubmit() {
    if (this.editing) {
      this.vehiculeService.updateVehicule(this.vehicule).subscribe();
        this.router.navigate(['./detail', this.vehicule.id_vehicule]);
    } else {
      this.vehiculeService.createVehicule(this.vehicule).subscribe(
        newVehicule => {
          this.router.navigate(['./detail', newVehicule.id_vehicule]);
        }
      );
    }
  }
}
