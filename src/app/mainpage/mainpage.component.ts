import { Component, OnInit } from '@angular/core';
import { ReciepeService } from '../reciepe.service';
import { RouterLink, RouterModule, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  ac:any;
  student: any;
  searchText:any;
  constructor(public abc:ReciepeService,public router:Router,public dialog: MatDialog) { }

  
  tye()
 {
  this.abc.getStudent().subscribe(data => {this.ac=data})
console.log(this.ac);
      
}
tye1()
 {
 this.student= this.abc.getStudent();
 console.log(this.student);  
}
doStuff(p:any)
  {
   // window.open("http://localhost:4200/demo", "_blank","width=1000,height=500");
   console.log(p);
   this.abc.xyz=p;
    this.router.navigate([p.Country]);
  }
ngOnInit() {
     
  // this.getStudent()  
  //   .subscribe(data => console.log(data),   this.student = data);  
  this.tye();
  this.tye1();
 
   
}

openDialog(p:any) {
  console.log(p);
  this.abc.xyz=p;

 

  
}
}





  


