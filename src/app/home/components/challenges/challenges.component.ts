import { Component, OnInit } from '@angular/core';
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
  currentUser:User;

  constructor(private challengeService:ChallengeService, private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users =>{
      this.users = users;
      if(this.currentUser==undefined){
        this.currentUser=this.users.find(e => e.userName=='ZP');
      }
      console.log(this.currentUser.userName);
      this.challengeService.getChallenges().subscribe(challenges =>{
        this.challenges = challenges;
      } );
    } );
  }

  userSelected(user)
  {
    console.log(user.userName);
    this.currentUser=user;
    this.ngOnInit();
  } 
 
}
