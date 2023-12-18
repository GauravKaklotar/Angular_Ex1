import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() rowPrice!: number;
  @Input() searchPrice!: number;

  loop!: number;
  
  constructor(private el: ElementRef) {
  }
  
  @HostListener('mouseenter') onMouseEnter() {
    this.loop = this.el.nativeElement.childElementCount - 1;
    for (let i = 0; i <= this.loop; i++) {
      if (this.searchPrice == null) {
        this.el.nativeElement.children[i].style.backgroundColor = "white";
      } else if (this.el.nativeElement.children[i].cells[3].innerHTML <= this.searchPrice) {
        this.el.nativeElement.children[i].style.backgroundColor = "#90EE90";
      } else {
        this.el.nativeElement.children[i].style.backgroundColor = "#FF7F7F";
      }
      console.log(this.el.nativeElement.children[i].cells[3].innerHTML);
    }
  }
}
