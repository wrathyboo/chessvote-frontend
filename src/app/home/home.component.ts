import { Component } from '@angular/core';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showAccounts: any = [];
  totalContest: any = '';
  showCandidates: any = [];
  account: any = [];

  constructor(private app: AppService, ) { }

  ngOnInit(): void {
    this.app.listAccounts().subscribe(  (res: any) =>{      
        this.showAccounts = res.contests;
    })
  }

  
}
