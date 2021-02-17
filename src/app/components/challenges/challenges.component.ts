import { Component, OnInit } from '@angular/core';
import { Challenge } from '../../models/Challenge' 
@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.css']
})
export class ChallengesComponent implements OnInit {
  challenges:Challenge[];
  constructor() { }

  ngOnInit(): void {
    this.challenges =[
      { 'year': 2021, 'listIndex': 1, 'descr': 'Kirjassa kirjoitetaan päiväkirjaa' },
      { 'year': 2021, 'listIndex': 2, 'descr': 'Kirjan on kirjoittanut opettaja' },
      { 'year': 2021, 'listIndex': 3, 'descr': 'Historiallinen romaani' }
    ] 
  }
}
