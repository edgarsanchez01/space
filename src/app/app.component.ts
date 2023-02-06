import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'space-5A';
  data: any[] = [];
  data2: any[] = [];
  data3: any[] = [];
  

  constructor(
    private http: HttpClient
  ){}

  ngOnInit() {
    this.http.get('https://api.spacexdata.com/v4/rockets').subscribe((data: any) => {
      this.data = data;
    })
    this.http.get('https://api.spacexdata.com/v4/capsules').subscribe((data2: any) => {
      this.data2 = data2;
    })
    this.http.get('https://api.spacexdata.com/v4/company').subscribe((data3: any) => {
      this.data3 = data3;
    })
  }

}
