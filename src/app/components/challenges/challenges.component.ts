import { Component, OnInit } from '@angular/core';
import { ChallengeService } from 'src/app/services/challenge.service';
import { Challenge } from '../../models/Challenge' 
@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.css']
})
export class ChallengesComponent implements OnInit {
  challenges:Challenge[];
  constructor(private challengeService:ChallengeService) { }

  ngOnInit(): void {
    this.challengeService.getChallenges().subscribe(challenges =>{
      this.challenges = challenges;
    } );
  } 
}
