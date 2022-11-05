import { Component, OnInit } from '@angular/core';
import { BackofficeService } from '../../../backoffice.service';

@Component({
  selector: 'app-dodge',
  templateUrl: './dodge.component.html',
  styleUrls: ['./dodge.component.css']
})
export class DodgeComponent implements OnInit {

  public someText: any = '';

  constructor(private backofficeService: BackofficeService) {
    this.someText = this.backofficeService.control$
   }

  ngOnInit(): void {
  }

}
