import { Component, Input, OnInit, ViewChildren } from '@angular/core';
import { GetInTouchService } from './get-in-touch.service';
@Component({
  selector: 'app-business-get-in-touch',
  templateUrl: './get-in-touch.component.html',
  styleUrls: ['./get-in-touch.component.css'],
})
export class BusinessGetInTouchComponent implements OnInit {
  constructor(private getInTouchService: GetInTouchService) {}

  buttonsData?: any;
  // @TODO: Set to zero for now - when query params ready - set it to applicable index;
  selectedButton: number = 0;
  @ViewChildren('tabButton') buttonsList?: any;
  @Input() currentScreenSize?: string;

  ngOnInit(): void {
    this.buttonsData = this.getInTouchService.buttonsData;
  }

  handleButtonClick(i: number): void {
    const button = this.buttonsList._results;
    button.forEach(() => {
      if (i === this.selectedButton) {
        document
          .getElementById(`${'tabButton-' + i}`)
          ?.classList.toggle('active');
      } else if (i !== this.selectedButton) {
        document
          .getElementById(`${'tabButton-' + i}`)
          ?.classList.toggle('active');
        // Remove the active class from previously selected button
        document
          .getElementById(`${'tabButton-' + this.selectedButton}`)
          ?.classList.remove('active');

        this.selectedButton = i;
      }
    });
  }
}
