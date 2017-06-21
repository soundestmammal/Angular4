import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-farm]',
  // selector: '.app-farm',
  selector: 'app-farm',
  templateUrl: './farm.component.html',
  styleUrls: ['./farm.component.css']
})
export class FarmComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'TestServer';
  serverCreated = false;

  constructor() {
  	setTimeout(() => {
  		this.allowNewServer = true;

  	}, 2000);
   }

  ngOnInit() {

  }
  onCreateServer(){
  	this.serverCreated = true;
  	this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: any){
  	this.serverName = (<HTMLInputElement>event.target).value;
  }
}
