import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') bluePrintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
    // lifecyle hook
    //console.log('ngOnInit called');
  }

  onAddServer(nameInput: HTMLInputElement) {
    //console.log(this.serverContentInput)
    // console.log(nameInput.value);
    this.serverCreated.emit({
      serverName: nameInput.value, 
      serverContent: this.serverContentInput.nativeElement.value});
  }

  onAddBluePrint(nameInput: HTMLInputElement) {
    //this.serverContentInput.nativeElement.value = 'Something';
      // you should not access the DOM this way
    this.bluePrintCreated.emit({
      serverName: nameInput.value, 
      serverContent: this.serverContentInput.nativeElement.value});
  }

}
