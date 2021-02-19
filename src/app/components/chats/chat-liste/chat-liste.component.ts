import { Component, OnInit } from '@angular/core';
import { ChatHttpService } from 'src/app/chat-http.service';
import { Chat } from 'src/app/models/Chat';

@Component({
    selector: 'app-chat-liste',
    templateUrl: './chat-liste.component.html',
    styleUrls: ['./chat-liste.component.css']
})
export class ChatListeComponent implements OnInit {

    chats: Chat[] = [];

    constructor(private chatHttpService: ChatHttpService) { }

    ngOnInit(): void {
        this.chatHttpService.findAll().subscribe(res=>{
            this.chats = res;
        })
    }

    onDeleteChat(chat:Chat){
        this.chatHttpService.delete(chat.id).subscribe();
        this.chats = this.chats.filter(unChat => unChat.id !== chat.id);
    }

}
