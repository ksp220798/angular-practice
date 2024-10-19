import { Component, OnInit } from '@angular/core';
import { MyFirstServiceService } from '../my-first-service.service'; 
@Component({
  selector: 'app-myfirst-component',
  templateUrl: './myfirst-component.component.html',
  styleUrls: ['./myfirst-component.component.scss']
})
export class MyfirstComponentComponent implements OnInit {

  message: string = 'Welcome to Angular!';
  imgUrl : string = "https://imgs.bharatmatrimony.com/bmimgs/bharatmatrimony-logo.png"
  myname : string="";
  apiData:any[]=[];
  displayAlert() {
    alert(this.message);
  }
  isvisible:boolean= false;
  isSpecial:boolean = true;
  name:string[]= ['rehan','badal','kundan'];
  ratingPart:number=1;
  constructor(
    public MyFirstServiceServices : MyFirstServiceService
  ) { }

  ngOnInit(): void {
    this.MyFirstServiceServices.getGreeting();
    this.MyFirstServiceServices.getPosts().subscribe((data) => {
      this.apiData = data;
      console.log("kundan",this.apiData)
        });
    // this.apiData = this.MyFirstServiceServices.getPosts();
   
  }

}
