import { Component, OnInit } from '@angular/core';
import { ReciepeService } from '../reciepe.service';

@Component({
  selector: 'app-reciepe',
  templateUrl: './reciepe.component.html',
  styleUrls: ['./reciepe.component.css']
})
export class ReciepeComponent implements OnInit {
 
  ac: any;
ax:any;
  constructor(public abc:ReciepeService) { }

  ngOnInit() {

    this.ax= this.abc.xyz;
  }
  tye()
  {
   this.abc.getStudent().subscribe(data => {this.ac=data,console.log(this.ac)})
 console.log(this.ac);
       
 }
}
