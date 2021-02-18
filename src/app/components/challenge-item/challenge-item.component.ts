import { Component, Input, OnInit } from '@angular/core';
import { Challenge } from 'src/app/models/Challenge';
import { User } from '../../models/User';

@Component({
  selector: 'app-challenge-item',
  templateUrl: './challenge-item.component.html',
  styleUrls: ['./challenge-item.component.css']
})
export class ChallengeItemComponent implements OnInit {
 @Input() challenge: Challenge; 
 @Input() user: User; 
  constructor() { }

  ngOnInit(): void {
  }

}
