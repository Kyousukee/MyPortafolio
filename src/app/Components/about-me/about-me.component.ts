import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMEComponent implements OnInit  {
  age = new Date().getFullYear() - 1998;
  ngOnInit() {
    AOS.init(); // Inicializar AOS
  }
}
