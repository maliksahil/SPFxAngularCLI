import { Component, Input, HostBinding, HostListener, ElementRef } from '@angular/core';

import { Version } from '@microsoft/sp-core-library';

import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
  .heart {
    background-color: red;
    display: inline-block;
    height: 10px;
    margin: 0 3px;
    position: relative;
    top: 0;
    transform: rotate(-45deg);
    width: 10px;
    -webkit-animation: heartbig_animation 0.8s infinite;
    -moz-animation: heartbig_animation 0.8s infinite;
    -o-animation: heartbig_animation 0.8s infinite;
    animation: heartbig_animation 0.8s infinite;
  }
  .heart:before,
  .heart:after {
    content: "";
    background-color: red;
    border-radius: 50%;
    height: 10px;
    position: absolute;
    width: 10px;
  }
  .heart:before {
    top: -5px;
    left: 0;
  }
  .heart:after {
    left: 5px;
    top: 0;
  }
  @-webkit-keyframes heartbig_animation {
    0% { opacity: 1; }
    50% { opacity: 0.5; }
    100% { opacity: 0; }}
    @-moz-keyframes heartbig_animation {
    0% { opacity: 1; }
    50% { opacity: 0.5; }
    100% { opacity: 0; }}
    @-o-keyframes heartbig_animation {
    0% { opacity: 1; }
    50% { opacity: 0.5; }
    100% { opacity: 0; }}
    @keyframes heartbig_animation {
    0% { opacity: 1; }
    50% { opacity: 0.5; }
    100% { opacity: 0; }}
  `]
})
export class AppComponent {
  @Input() description = 'Angular';
  // title = 'Angular';
  constructor(elm: ElementRef) {
    this.description = elm.nativeElement.getAttribute('description');
    console.log('******COMPONENT******');
  }
}
