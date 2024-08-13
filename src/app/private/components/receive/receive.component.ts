import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { IonContent, IonItem, IonHeader, IonButtons, IonButton, IonCol, IonCardContent, IonRow, IonGrid, IonLabel, IonAccordion, IonAccordionGroup,IonSelect, IonBackButton, IonSelectOption, IonInput, IonList, IonTitle, IonModal, IonToolbar, IonCardHeader, IonCard } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-receive',
  templateUrl: './receive.component.html',
  styleUrls: ['./receive.component.scss'],
  standalone: true,
  imports: [IonContent, IonItem, IonHeader, IonModal, IonTitle, IonButton, IonInput, IonButtons, IonCol, IonCardContent, IonRow, IonGrid, IonLabel, IonAccordion, IonBackButton, IonAccordionGroup,IonSelect, IonSelectOption,IonToolbar, CommonModule, FormsModule, IonList, IonCardHeader, IonCard]
})
export class ReceiveComponent  implements OnInit {
data;
totalPieces;
name: string;
  constructor(
    private modalCtrl: ModalController,
    private route: Router
  ) { }

  ngOnInit() {
    console.log(this.data);
    this.totalPieces = this.sumPieces(this.data.lineInformations);
  }

  sumPieces(items): number {
    return items.reduce((total, item) => total + item.pieces, 0);
  }

  confirm() {

    return this.modalCtrl.dismiss(this.name, 'confirm');
  }
}
// <ion-label>Pieces 52613026672 :</ion-label>
