import { Component, OnInit } from '@angular/core';
// @TODO: This service is shared -
import { FooterService } from '../../../online-banking/components/footer/footer.service';
import { FooterContentOneType, FooterContentTwoType } from 'src/app/interfaces';
@Component({
  selector: 'app-footer2',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  constructor(private service: FooterService) {}

  footerContentOne?: FooterContentOneType[];
  footerContentTwo?: FooterContentTwoType[];

  ngOnInit(): void {
    this.service.getFooterContentOne().subscribe((res) => {
      this.footerContentOne = res;
    });
    this.service.getFooterContentTwo().subscribe((res) => {
      this.footerContentTwo = res;
    });
  }
}
