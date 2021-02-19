import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChatHttpService } from 'src/app/chat-http.service';
import { Chat } from 'src/app/models/Chat';

@Component({
    selector: 'app-chat-card',
    templateUrl: './chat-card.component.html',
    styleUrls: ['./chat-card.component.css']
})
export class ChatCardComponent implements OnInit {

    @Input() chat: Chat;
    @Output() delete = new EventEmitter()

    constructor(private chatHttpService: ChatHttpService) { }

    ngOnInit(): void {
    }

    onDelete() {
        this.delete.emit();
    }

}
