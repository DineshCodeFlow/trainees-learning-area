import { Component, OnInit } from '@angular/core';
import { url } from 'inspector';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.scss']
})
export class LeftComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  openNav(): void {
    const sidebar = document.getElementById("mysidebar") as HTMLElement;
    const mainContent = document.getElementById("main") as HTMLElement;

    if (sidebar && mainContent) {
      sidebar.style.width = "290px";
      // mainContent.style.marginLeft = "290px";   //this will be used to slide the main content
    }
  }

  closeNav(): void {
    const sidebar = document.getElementById("mysidebar") as HTMLElement;
    const mainContent = document.getElementById("main") as HTMLElement;
    if (sidebar && mainContent) {
      sidebar.style.width = "0";
      mainContent.style.marginLeft = "0";
      sidebar.style.padding = "0";
    }
  }

  toggleContent(id: string): void {
    const content = document.getElementById(id);
    if (content) {
      if (content.style.display === 'block') {
        content.style.display = 'none';
      } else {
        content.style.display = 'block';
      }
    }
  }
  

}

