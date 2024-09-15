import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  handleSkipNav(event: any, section: string): void {
    event.preventDefault();
    window.location.hash = '';
    window.location.hash = section;
  }
}
