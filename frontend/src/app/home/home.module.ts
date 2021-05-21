import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ChallengesComponent } from './components/challenges/challenges.component';
import { ChallengeItemComponent } from './components/challenge-item/challenge-item.component';
import { BookRecordComponent } from './components/book-record/book-record.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    ChallengesComponent,
    ChallengeItemComponent,
    BookRecordComponent,
    AddBookComponent,
    LoginComponent
  ],
  exports: [
    ChallengesComponent
  ], 
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
  ]
})
export class HomeModule { }
