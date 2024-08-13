import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, IonicModule } from '@ionic/angular'; // Import IonicModule to include all Ionic components and services
import { UtilityService } from 'src/app/services/util/utility.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StatusPipe } from 'src/app/pipes/status/status.pipe';
import { addIcons } from 'ionicons';
import { airplaneSharp } from 'ionicons/icons';

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"],
  standalone: true,
  imports: [
    StatusPipe,
    IonicModule, // Import IonicModule instead of individual components
    CommonModule,
    FormsModule,
  ],
})
export class ModalComponent implements OnInit {
  data;
  name: string;
  serviceLevel: string = "";
  totalPieces: number;

  constructor(
    private modalCtrl: ModalController, 
    private route: Router,
    private utility: UtilityService) {
      addIcons({
         airplaneSharp,
      });
    }

  ngOnInit(): void {
    console.log(this.data);
    this.serviceLevel = this.utility.setServiceImage(this.data.serviceLevel.code);
    this.totalPieces = this.sumPieces(this.data.lineInformations);
    console.log("piece count is ", this.totalPieces);
  }

  sumPieces(items): number {
    return items.reduce((total, item) => total + item.pieces, 0);
  }

  cancel() {
    return this.modalCtrl.dismiss(null, "cancel");
  }

  confirm() {
    return this.modalCtrl.dismiss(this.name, "confirm");
  }

  deliver() {
    this.modalCtrl.dismiss();
    this.route.navigate(["deliver"]);
  }
}
