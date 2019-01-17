import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    public wsService: WebsocketService
  ) {  }
    sendMessage(mensaje: string) {
      const payload = {
        de: this.wsService.obtenerUsuario().nombre,
        cuerpo: mensaje
      };
      this.wsService.emit('mensaje', payload);
    }
    getMessages() {
      return this.wsService.listen('mensajes-nuevos');
    }
    getMessagesPrivate() {
      return this.wsService.listen('mensaje-privado');
    }
}
