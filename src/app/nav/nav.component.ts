import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() { }

  estaLogado() {
    return this.auth.estaLogado();
  }

}
