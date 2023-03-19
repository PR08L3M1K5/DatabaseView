import {Component, ElementRef, ViewChild} from '@angular/core';
import {EntityFieldModel, EntityModel, EntityRelationModel} from "./models/entity.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  entities:EntityModel[]=[];
  relations:EntityRelationModel[]=[];
  list:number[] = [1,2,3,4,5,6,7,8,9,10]
  x:number=50;
  y:number=50;


  @ViewChild("1")
  line:any
  constructor(elRef:ElementRef)
  {
    this.entities.push(<EntityModel>{id:0,name:"testEntity1",xPosition:this.x,yPosition:this.y,fields:[<EntityFieldModel>{id:0,name:"id",type:"Integer"},
        <EntityFieldModel>{id:0,name:"name",type:"VARCHAR"},
        <EntityFieldModel>{id:0,name:"surname",type:"VARCHAR"},
        <EntityFieldModel>{id:0,name:"email",type:"VARCHAR"},
        <EntityFieldModel>{id:0,name:"phone_number",type:"VARCHAR"}
      ]})
    this.entities.push(<EntityModel>{id:1,name:"testEntity2",xPosition:this.x,yPosition:this.y,fields:[<EntityFieldModel>{id:0,name:"id",type:"Integer"},
        <EntityFieldModel>{id:0,name:"name",type:"VARCHAR"},
        <EntityFieldModel>{id:0,name:"surname",type:"VARCHAR"},
        <EntityFieldModel>{id:0,name:"email",type:"VARCHAR"},
        <EntityFieldModel>{id:0,name:"phone_number",type:"VARCHAR"}
      ]})
    this.entities.push(<EntityModel>{id:2,name:"testEntity2",xPosition:this.x,yPosition:this.y,fields:[<EntityFieldModel>{id:0,name:"id",type:"Integer"},
        <EntityFieldModel>{id:0,name:"name",type:"VARCHAR"},
        <EntityFieldModel>{id:0,name:"surname",type:"VARCHAR"},
        <EntityFieldModel>{id:0,name:"email",type:"VARCHAR"},
        <EntityFieldModel>{id:0,name:"phone_number",type:"VARCHAR"}
      ]})
    this.relations.push(<EntityRelationModel>{id:0,firstEntity:this.entities[0],secondEntity:this.entities[1]})
    this.relations.push(<EntityRelationModel>{id:1,firstEntity:this.entities[0],secondEntity:this.entities[2]})
    this.relations.push(<EntityRelationModel>{id:2,firstEntity:this.entities[1],secondEntity:this.entities[2]})
  }
  changeLinePosition(event$:any,entityId:number) {
    let element = event$.pointerPosition
    this.entities[entityId].xPosition = element.x;
    this.entities[entityId].yPosition = element.y;
  }
}
