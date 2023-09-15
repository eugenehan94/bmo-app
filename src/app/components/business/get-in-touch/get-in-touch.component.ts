import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-business-get-in-touch',
  templateUrl: './get-in-touch.component.html',
  styleUrls: ['./get-in-touch.component.css']
})
export class BusinessGetInTouchComponent {

  @Input() currentScreenSize?: string;

}
