import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  port = 4200;
  author = 'Paulina Wójcik'; 

  clientIp!: string;
  clientDate!: string;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getIPAddress();
    console.log(`[INFO] Autor: ${this.author} | Port: ${this.port} | Data uruchomienia: ${new Date()}`);
  }

    
  private getIPAddress(): void {
    this.http.get("http://api.ipify.org/?format=json").subscribe((res:any)=>{
      this.clientIp = res.ip;
      this.getDateTime(res.ip)
      
    });
  }

  getDateTime(ip: string) {
    this.http.get(`https://worldtimeapi.org/api/ip/${ip}`).subscribe((res: any) => {
      this.clientDate = res.datetime;
    });
  }

}
