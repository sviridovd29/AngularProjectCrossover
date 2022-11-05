import { Component, OnInit } from '@angular/core';
import { BackofficeService } from '../../../backoffice.service';

@Component({
  selector: 'app-lexus',
  templateUrl: './lexus.component.html',
  styleUrls: ['./lexus.component.css']
})
export class LexusComponent implements OnInit {

  public someText: any = '';

  constructor(private backofficeService: BackofficeService) {
    this.someText = this.backofficeService.control$
   }

  ngOnInit(): void {
  }

}
