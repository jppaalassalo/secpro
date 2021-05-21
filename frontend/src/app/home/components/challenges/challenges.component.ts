import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { ChallengeService } from '../../services/challenge.service';
import { UserService } from '../../services/user.service';
import { Challenge } from '../../models/Challenge'; 
import { User } from '../../models/User'; 

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.css']
})

export class ChallengesComponent implements OnInit {
  challenges:Challenge[];
  users:User[];
  viewReader:User;

  constructor(private challengeService:ChallengeService, private userService:UserService, public auth: AuthService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users =>{
      this.users = users;
      if(this.viewReader==undefined){
        this.viewReader=this.users.find(e => e.userName=='ZP');
      }
      console.log(this.viewReader.userName);
      this.challengeService.getChallenges().subscribe(challenges =>{
        this.challenges = challenges;
      } );
    } );
  }

  readerSelected(reader:User)
  {
    console.log(reader.userName);
    this.viewReader=reader;
    this.challengeService.getChallenges().subscribe(challenges =>{
      this.challenges = challenges;
    } );
} 
 
}
