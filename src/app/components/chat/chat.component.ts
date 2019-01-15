import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Subscription } from 'rxjs';
import { element } from 'protractor';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {
  texto: '';
  mensajesSuscription: Subscription;
  mensajes: any[] = [];
  elemento: HTMLElement;
  constructor(public chat: ChatService) { }

  ngOnInit() {
    this.elemento = document.getElementById('chat-mensajes');
    this.mensajesSuscription = this.chat.getMessages().subscribe( msg => {
      this.mensajes.push(msg);
      setTimeout(() => {
        this.elemento.scrollTop = this.elemento.scrollHeight;
      }, 50);
    });
  }
  ngOnDestroy() {
    this.mensajesSuscription.unsubscribe();
  }
  enviar () {
    if ( this.texto.trim().length === 0 ) {
      return;
    }
    this.chat.sendMessage( this.texto);
    this.texto = '';
  }
}
