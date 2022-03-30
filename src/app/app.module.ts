import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnswerComponent } from './answer/answer.component';
import { VideoComponent } from './video/video.component';
import { ClockComponent } from './clock/clock.component';
import { TestComponent } from './test/test.component';
import { MusicButtonComponent } from './music-button/music-button.component';
import { VideooffComponent } from './videooff/videooff.component';
import { StartComponent } from './start/start.component';

import { BoutonService } from './services/bouton.service';
import { Songs } from './services/songs.service';


@NgModule({
  declarations: [
    AppComponent,
    AnswerComponent,
    VideoComponent,
    ClockComponent,
    TestComponent,
    MusicButtonComponent,
    VideooffComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
    
  ],
  providers: [
    Songs,
    BoutonService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
