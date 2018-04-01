import { Component, OnInit } from '@angular/core';
import { Vehicule } from '../vehicule';
import { ActivatedRoute, Router } from '@angular/router';
import { VehiculeService } from '../vehicule.service';
import { MatDialog } from '@angular/material';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail-vehicule',
  templateUrl: './detail-vehicule.component.html',
  styleUrls: ['./detail-vehicule.component.css']
})
export class DetailVehiculeComponent implements OnInit {

  id: number;
  vehicule: Vehicule;

  constructor(private vehiculeService: VehiculeService,
              private router: Router,
              private route: ActivatedRoute,
              private dialog: MatDialog,
              private location: Location) { }

  ngOnInit() {

    this.id = +this.route.snapshot.paramMap.get('id');
    this.vehiculeService.getVehicule(this.id).subscribe(
      vehicule => this.vehicule = vehicule
    );
  }

  openDeleteDialog(): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '250px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteVehicule();
      }
    });
  }

  deleteVehicule() {
    this.vehiculeService.deleteVehicule(this.vehicule.id_vehicule).subscribe(
      () => {
        this.location.back();
      },
        err => { console.log(err); }
    );
  }

}
