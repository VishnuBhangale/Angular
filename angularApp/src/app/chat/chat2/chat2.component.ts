import { Component, OnInit } from '@angular/core';
import { ChatMessage } from 'src/app/models/ChatMessage';
import { ChatmessageService } from 'src/app/services/chatmessage.service';

@Component({
  selector: 'app-chat2',
  templateUrl: './chat2.component.html',
  styleUrls: ['./chat2.component.css']
})
export class Chat2Component implements OnInit {
  messages: ChatMessage[] = [];
  newMessage: string = '';
 // Inject the chat service 
 constructor(private _chatService: ChatmessageService) { }

 ngOnInit(): void {

   this._chatService.currentMessage$.subscribe(res => {
     console.log('res from Behavior subject Chat2', res);
     //Behavior subject

    // this.messages = res;

    // subject
    this.messages.push(res) ;
   })
 }

 sendMessage() {
  console.log('sendMessage', this.newMessage);
  if (this.newMessage.trim()) {
    this._chatService.sendMessage('Dube', this.newMessage);
    this.newMessage = ''; //clear input field
  }
}
}