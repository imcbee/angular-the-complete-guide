import { Component, OnInit, Input, ViewEncapsulation, SimpleChange, SimpleChanges, OnChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None or Native
})
export class ServerElementComponent implements 
  OnInit, 
  OnChanges, 
  DoCheck, 
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
{
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading', {static: true}) header: ElementRef;
  @ContentChild("contentParagraph", {static: true}) paragraph: ElementRef;
    // input allows us to bind in parent elements
    // use an alias to make the naming conventions easier in each component

  constructor() { 
    console.log("constructor called");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChange called!");
    console.log(changes)
  }

  ngOnInit(): void {
    console.log('ngOnInit called!')
    console.log('text content' + this.header.nativeElement.textContent)
    console.log('test content of paragraph' + this.paragraph.nativeElement.textContent)
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called!')
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called!')

  }

  ngAfterContentChecked(): void {
    console.log("ngAFterContentCHecked called!")
  }

  ngAfterViewInit(): void {
    console.log("ngAFterViewInit called!")

  }

  ngAfterViewChecked(): void {
    console.log("ngAFterViewChecked called!")

  }

  ngOnDestroy(): void {
    console.log("ngOnDestory called!")

  }

}
