import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chat } from './models/Chat';

@Injectable({
  providedIn: 'root'
})
export class ChatHttpService {

  constructor(private httpClient:HttpClient) { }

  findAll(){
    return this.httpClient.get<Chat[]>('http://localhost:3000/chats') 
  }

  findById(id:number){
    return this.httpClient.get<Chat>(`http://localhost:3000/chats/${id}`) 
  }

  save(chat:Chat){
    return this.httpClient.post<Chat>(`http://localhost:3000/chats`, chat);
  }

  update(chat:Chat){
    return this.httpClient.put<Chat>(`http://localhost:3000/chats`, chat);
  }

  delete(id:number){
    return this.httpClient.delete(`http://localhost:3000/chats/${id}`);
  }
}
