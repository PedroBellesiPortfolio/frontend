import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-botonacceso',
  templateUrl: './botonacceso.component.html',
  styleUrls: ['./botonacceso.component.css']
})
export class BotonaccesoComponent implements OnInit {
  @Output() btnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

onClick (){
  console.log("hola");
  this.btnClick.emit();
}  
}
