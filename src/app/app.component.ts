import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DatabaseView';
  list:number[] = [1,2,3]
  x:number=50;
  y:number=50;
  x2:number=300;
  y2:number=400;
  @ViewChild("linkLine")
  line:any
  constructor(elRef:ElementRef) {
  }

  changeLinePosition(event$:any) {
    let element = event$.pointerPosition
    this.x= element.x;
    this.y = element.y;
  }

  changeLinePosition1($event: any) {
    let element = $event.pointerPosition
    this.x2= element.x;
    this.y2 = element.y;
  }
}
