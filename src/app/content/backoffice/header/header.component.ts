import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/shared/local-storage.service';
import { BackofficeService } from '../backoffice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public user = this.backofficeService.controlUser$;

  constructor(private backofficeService: BackofficeService,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
  }

  public logOut(): void {
    this.localStorageService.logOutUser()
  }

}
