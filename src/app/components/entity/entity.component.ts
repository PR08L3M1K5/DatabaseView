import { Component } from '@angular/core';

@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.css']
})
export class EntityComponent {
  list:string[]=["id","name","surname","email","phone number","address"]
  constructor() {
  }
}
