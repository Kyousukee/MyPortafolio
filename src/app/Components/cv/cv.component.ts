import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css'
})
export class CVComponent  {
  isModalOpen = false;
  modalText:string =  "";
  openModal(texto:string): void {
    this.modalText = texto;
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.modalText = "";
  }
}
