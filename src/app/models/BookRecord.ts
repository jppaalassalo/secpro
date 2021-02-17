import {Challenge} from './Challenge';
import {User} from './User';

export class BookRecord {
    'bookName': string;
    'author': string;
    'rating': number;
    'comment': string;
    'reader': User;
    'taskId': Challenge;
} 
