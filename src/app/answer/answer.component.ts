import { Component, Input, OnInit } from '@angular/core';
import { Songs } from '../services/songs.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit {

  
  array! : any;

  constructor(private Songs : Songs) { }

  
  

  ngOnInit(): void {

    this.array = this.Songs.songs;


  }

  test () {

    





  }


  
    
}


