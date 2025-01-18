import { Component, OnInit } from '@angular/core';
import { projectsEn} from '../../api/proyectos';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
  projects:any[]=projectsEn;
  venobox: any;
  isModalOpen = false;
  selectedImage: { src: string; title: string } | null = null;
  constructor() { }

  ngOnInit(): void {
  }


  openModal(image: { src: string; title: string }): void {
    this.selectedImage = image;
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.selectedImage = null;
  }

  detailOnClick(project:any){
    this.projects.filter(item=>item.detailIsDisplayed && item.id!=project.id).map(elem=>elem.detailIsDisplayed=false);
    project.detailIsDisplayed=!project.detailIsDisplayed;
  }



}
