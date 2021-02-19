import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ChatHttpService } from 'src/app/chat-http.service';

@Component({
    selector: 'app-chat-form',
    templateUrl: './chat-form.component.html',
    styleUrls: ['./chat-form.component.css']
})
export class ChatFormComponent implements OnInit {

    chatFormulaire: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private chatHttpService: ChatHttpService,
        private router: Router
        ) {
        this.chatFormulaire = this.formBuilder.group({
            nom: [''],
            age:[0],
            race:[''],
            estVivant:[true]
        })
    }

    onSubmit(){
        this.chatHttpService
            .save(this.chatFormulaire.value)
            .subscribe(console.log)
        this.router.navigate(['/chats'])
    }

    ngOnInit(): void {
    }

}
