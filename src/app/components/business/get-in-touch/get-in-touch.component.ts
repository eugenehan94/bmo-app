import {
  Component,
  Input,
  OnInit,
  ViewChildren,
  AfterViewInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetInTouchService } from './get-in-touch.service';
@Component({
  selector: 'app-business-get-in-touch',
  templateUrl: './get-in-touch.component.html',
  styleUrls: ['./get-in-touch.component.css'],
})
export class BusinessGetInTouchComponent implements OnInit, AfterViewInit {
  constructor(
    private getInTouchService: GetInTouchService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  buttonsData?: any;
  // @TODO: Set to zero for now - when query params ready - set it to applicable index;
  selectedButton?: number;
  @ViewChildren('tabButton') buttonsList?: any;
  @Input() currentScreenSize?: string;

  ngOnInit(): void {
    this.buttonsData = this.getInTouchService.buttonsData;
  }

  ngAfterViewInit(): void {
    this.getParamsOnLoad();
  }

  addParams(selectedTab: number) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        triageTab: selectedTab,
      },
    });
  }

  getParamsOnLoad() {
    this.route.queryParams.subscribe((params) => {
      const button = this.buttonsList._results;
      if (params['triageTab'] == null) {
        this.selectedButton = 0;
        button.forEach(() => {
          document
            .getElementById(`${'tabButton-' + this.selectedButton}`)
            ?.classList.toggle('active');
          document
            .getElementById(`${'tabButton-' + this.selectedButton}`)
            ?.setAttribute('tabIndex', '0');
          document
            .getElementById(`${'tabButton-' + this.selectedButton}`)
            ?.setAttribute('aria-selected', 'true');
        });
      } else {
        this.selectedButton = params['triageTab'];
        button.forEach(() => {
          document
            .getElementById(`${'tabButton-' + this.selectedButton}`)
            ?.classList.toggle('active');
          document
            .getElementById(`${'tabButton-' + this.selectedButton}`)
            ?.setAttribute('tabIndex', '0');
          document
            .getElementById(`${'tabButton-' + this.selectedButton}`)
            ?.setAttribute('aria-selected', 'true');
        });
      }
    });
  }

  handleButtonClick(i: number): void {
    const button = this.buttonsList._results;
    button.forEach(() => {
      if (i != this.selectedButton) {
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
        this.addParams(i);
      }
    });
  }
}
