import { Component, OnInit } from '@angular/core';
import { BoutonService } from './services/bouton.service';
// import { Department } from './models/Department.model';
import { Songs } from './services/songs.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'BLINDTEST';

  inboundClick = true;

  publicsound : boolean = false;
  mute : boolean = false;
  sound: boolean | undefined;

  button : boolean = true;
  array!: any[];
  answer : string = '';

  random : any;
  point : any;

  color = "#F1F0F0";


 
    

  

  songs = [
    {
      "id": "0",
      "name": "Do I Wanna Know",
      "link": "http://127.0.0.1:8887/s1.mp3",
    },

    {
      "id": "1",
      "name": "Song 2",
      "link": "http://127.0.0.1:8887/s2.mp3",
    },

    {
      "id": "2",
      "name":"Baiana",
      "link": "http://127.0.0.1:8887/s3.mp3",
    },

    {
      "id": "3",
      "name":"stressed out",
      "link": "http://127.0.0.1:8887/s4.mp3",
    },

    {
      "id": "4",
      "name":"dark necessities",
      "link": "http://127.0.0.1:8887/s5.mp3",
    }
  ];

 

  constructor(private Songs : Songs) {

  }

  ngOnInit(): void {
    this.array = this.Songs.songs;
  }

  

 

  playbutton = "https://cdn2.iconfinder.com/data/icons/music-player-black/32/music_player_black-03-512.png";

  audio = new Audio();

  

  // songs : Department[] = [
  //   {id : 1, name: 'Do I Wanna Know', link: 'http://127.0.0.1:8887/s1.mp3'},
  //   {id : 2, name: 'Song 2', link: 'http://127.0.0.1:8887/s2.mp3'},
  // ]


 

  test () {

    

    if (this.answer === this.point) {

      this.color = "#DAF7A6";

      this.answer = '';

      this.start()

      setTimeout(
        ()=>{
          this.color = "#F1F0F0";
        }, 2000
      );


    } else {

      this.color = "#FFA09A";

      setTimeout(
        ()=>{
          this.color = "#F1F0F0";
        }, 2000
      );

      
    }
  }

  

    
  


  start () {

    
    this.audio.src = this.randomsong();
    this.audio.load();
    this.audio.play();
    this.audio.volume = 0.1;
  
    this.inboundClick = false;
    this.sound = true;
    this.mute = false;
    this.button = false;

    this.array.splice(this.random, 1)
    
  }

  randomsong() {

    
    
    this.random = Math.floor(Math.random() * this.array.length);;
    

    
    // this.random = Math.floor(Math.random() * 5);;
    console.log(this.random);

    var result : any;
    result = this.array[this.random].link;
    this.point = this.array[this.random].name;
    



    return result;
    
  }


  buttonreset () {
    this.audio.pause();
    this.audio.load();
    this.audio.play();
    this.sound = true;
    this.mute = false;
    this.playbutton = "https://cdn2.iconfinder.com/data/icons/music-player-black/32/music_player_black-03-512.png";

  }

  nextbutton() {
    
  }



  buttonplay () {
    if (this.playbutton==="https://cdn2.iconfinder.com/data/icons/music-player-black/32/music_player_black-03-512.png") {
      this.playbutton = "https://cdn2.iconfinder.com/data/icons/music-player-black/32/music_player_black-01-512.png"
      this.sound =false;
      this.mute =true;
      this.audio.pause();
    } else {
      this.playbutton = "https://cdn2.iconfinder.com/data/icons/music-player-black/32/music_player_black-03-512.png"
      this.sound =!this.sound;
      this.mute =!this.mute;
      this.audio.play();
    }
  }
}






function getRandomInt(arg0: number) {
  throw new Error('Function not implemented.');
}

