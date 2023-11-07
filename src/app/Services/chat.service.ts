import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export class Message{
  constructor(public author:string, public content:string){}
}
@Injectable({
  providedIn: 'root'
})
export class ChatService {

 constructor(){}
 conversation = new Subject<Message[]>();
 messageMap:any ={
  "hi":"hello",
  "Hi":"Hello",
  "who are you":"My name is alexa",
  "My money was debited":"In two or Three business it will credit to you Don't Worry!!",
  "default": "I can't understand can yuou please repeat otherwise call harini"

 }
 getBotAnswer(msg:any){
  const userMessage = new Message('user',msg);
  this.conversation.next([userMessage]);
  const botMessage = new Message('bot',this.getBotMessage(msg));
  setTimeout(() =>{
    this.conversation.next([botMessage]);
  },1500);
 }
 getBotMessage(question:string){
  let answer = this.messageMap[question];
  return answer || this.messageMap['default']

 }
}
