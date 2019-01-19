import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  usuariosActivos: Observable <any>;

  constructor(public chatService: ChatService) { }

  ngOnInit() {
    this.usuariosActivos = this.chatService.getUsuariosActivos();
    // emitir obtener usuarios
    this.chatService.emitirUsuarioActivos();
  }

}
