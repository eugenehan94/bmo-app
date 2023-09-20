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
    console.log('button: ', button);
    button.forEach(() => {
      if (i === this.selectedButton) {
        document
          .getElementById(`${'tabButton-' + i}`)
          ?.classList.toggle('active');

        let tabindex = document
          .getElementById(`${'tabButton-' + i}`)
          ?.getAttribute('tabIndex');
        if (tabindex === '-1') {
          document
            .getElementById(`${'tabButton-' + i}`)
            ?.setAttribute('tabIndex', '0');
        } else {
          document
            .getElementById(`${'tabButton-' + i}`)
            ?.setAttribute('tabIndex', '-1');
        }
      } else if (i !== this.selectedButton) {
        document
          .getElementById(`${'tabButton-' + i}`)
          ?.classList.toggle('active');
        document
          .getElementById(`${'tabButton-' + i}`)
          ?.setAttribute('tabIndex', '0');
        document
          .getElementById(`${'tabButton-' + i}`)
          ?.setAttribute('aria-selected', 'true');
        // Remove the active class from previously selected button
        document
          .getElementById(`${'tabButton-' + this.selectedButton}`)
          ?.classList.remove('active');
        document
          .getElementById(`${'tabButton-' + this.selectedButton}`)
          ?.setAttribute('tabIndex', '-1');
        document
          .getElementById(`${'tabButton-' + this.selectedButton}`)
          ?.setAttribute('aria-selected', 'false');
        this.selectedButton = i;
      }
    });
  }
}
