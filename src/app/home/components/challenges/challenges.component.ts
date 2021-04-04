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
  viewUser:User;

  constructor(private challengeService:ChallengeService, private userService:UserService, public auth: AuthService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users =>{
      this.users = users;
      if(this.viewUser==undefined){
        this.viewUser=this.users.find(e => e.userName=='ZP');
      }
      console.log(this.viewUser.userName);
      this.challengeService.getChallenges().subscribe(challenges =>{
        this.challenges = challenges;
      } );
    } );
  }

  userSelected(user)
  {
    console.log(user.userName);
    this.viewUser=user;
    this.ngOnInit();
  } 
 
}
