import {Challenge} from './Challenge';
import {User} from './User';

export class BookRecord {
    '_id': string;
    'bookName': string;
    'author': string;
    'rating': number;
    'comment': string;
    'reader': User;
    'challengeId': Challenge;
} 
