import { Component, OnInit } from '@angular/core';
import { ChatService, Message } from '../Services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit{
  messages: Message[] = [];
  value:string | undefined
  constructor(public chatservice:ChatService){}
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    this.chatservice.conversation.subscribe((val)=>{
      this.messages = this.messages.concat(val);
    });
  }

  sendMessage(){
    this.chatservice.getBotAnswer(this.value);
    this.value = ''
  }
  


}
