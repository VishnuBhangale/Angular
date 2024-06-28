import { Injectable } from '@angular/core';
import { ChatMessage } from '../models/ChatMessage';
import { BehaviorSubject, Subject } from 'rxjs';

const initialMessage : ChatMessage[] = [
  { user: 'Rohit', message: 'Hello', timestamp: new Date()},
  { user: 'Dube', message: 'Hi, Rohit ', timestamp: new Date()}
]

@Injectable({
  providedIn: 'root'
})
export class ChatmessageService {
  private messageSubject = new Subject<ChatMessage>();
  
  //private messageSubject = new BehaviorSubject<ChatMessage[]>(initialMessage);
  currentMessage$= this.messageSubject.asObservable();
  constructor() {  }
   sendMessage(user: string, message: string) {

    const newMessage = { user, message, timestamp: new Date()};
//BehaviourSubject
   //this.messageSubject.next([...this.messageSubject.getValue(), newMessage]);
   
   //Subject
  
   this.messageSubject.next(newMessage);
  }
}
