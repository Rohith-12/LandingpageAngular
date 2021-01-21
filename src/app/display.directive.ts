import {
  Directive,
  HostListener,
  AfterViewInit,
  ElementRef,
} from "@angular/core";

@Directive({
  selector: "[appDisplay]",
})
export class DisplayDirective implements AfterViewInit {
  constructor(private element: ElementRef) {}
  twi: number;
  ngAfterViewInit() {}

  @HostListener("window:resize", ["$event"])
  onResize(event) {
    //console.log("Width: " + window.innerWidth);

    if (window.innerWidth > 600) {
      this.element.nativeElement.style.display = "flex";
    } else {
      this.element.nativeElement.style.display = "none";
    }
  }
}
