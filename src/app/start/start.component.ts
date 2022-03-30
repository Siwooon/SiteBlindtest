import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  inboundClick = true;

  @Input() soundstart : boolean = false;
  

  constructor() { 

    
  }

  ngOnInit(): void {

    
  }

  start () {

    let audio = new Audio();
    audio.src = "http://127.0.0.1:8887/s1.mp3";
    audio.load();
    audio.play();

    this.inboundClick = false;
    const sound = true;



  }
  


}


