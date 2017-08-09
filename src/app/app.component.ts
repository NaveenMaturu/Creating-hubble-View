import { Component } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
   a;
  private apiURL = "assets/table.json"

  data: any ={};

  constructor(public http: Http){

	  console.log('hello world');
	  this.getData();
	  this.getNaveen();
  }

  getData(){

	  return this.http.get(this.apiURL)
	 .map(res => res.json());
  }
  getNaveen(){
	  this.getData().subscribe(data =>{
	  //console.log(JSON.stringify(data));
		  this.a = data
		   console.log(this.a);

	  })
  }
}
