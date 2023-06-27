import { Component, OnInit } from '@angular/core';
 import { TcnewsapiService } from '../service/tcnewsapi.service';
@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {

  constructor(private api:TcnewsapiService) { }
  //technewsData
  techNewesData:any=[];
  ngOnInit(): void {
    this.api.tcTechNews().subscribe((result)=>{
      console.log(result.articles);
      this.techNewesData = result.articles;
  })
  }
}
