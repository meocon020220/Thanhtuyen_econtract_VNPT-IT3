import { Component, ElementRef, QueryList, VERSION, ViewChild, ViewChildren } from '@angular/core';
import { ToggleComponent } from './toggle/toggle.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  @ViewChildren (ToggleComponent) toggleComp: QueryList<ToggleComponent>;
  @ViewChild('nameInput', {static:true} ) nameInput: ElementRef< HTMLInputElement>;
  name = 'Angular ' + VERSION.major;
  isChecked= true;
  showLast=true;
  ngOnInit () {
console.log(this.nameInput);

   
  }
  ngAfterViewInit (){
    this.toggleComp.changes.subscribe(console.log)
    
  }
}

