import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Latestapp';
  sidebarOpen = true;

  toggleSidebar(){
    this.sidebarOpen = this.sidebarOpen? false : true;
  }
}