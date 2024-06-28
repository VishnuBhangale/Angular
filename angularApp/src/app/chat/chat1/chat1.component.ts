import { Component, OnInit } from '@angular/core';
import { ChatMessage } from 'src/app/models/ChatMessage';
import { ChatmessageService } from 'src/app/services/chatmessage.service';

@Component({
  selector: 'app-chat1',
  templateUrl: './chat1.component.html',
  styleUrls: ['./chat1.component.css']
})
export class Chat1Component implements OnInit {
  messages: ChatMessage[] = [];
  newMessage: string = '';
  // Inject the chat service 
  constructor(private _chatService: ChatmessageService) { }

  ngOnInit(): void {

    this._chatService.currentMessage$.subscribe(res => {
      console.log('res from Behavior subject Chat1', res);
      this.messages.push(res) ;
    });
  }

  sendMessage() {
    console.log('sendMessage', this.newMessage);
    if (this.newMessage.trim()) {
      this._chatService.sendMessage('Rohit', this.newMessage);
      this.newMessage = ''; //clear input field
    }
  }
}
