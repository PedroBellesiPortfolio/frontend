import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-botoneditar',
  templateUrl: './botoneditar.component.html',
  styleUrls: ['./botoneditar.component.css']
})

export class BotoneditarComponent implements OnInit {
  @Input()  idlocal: string="";

  constructor() { }

  ngOnInit(): void {
  }

}
