import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  QueryList,
  ViewChildren,
  HostListener,
  AfterViewInit,
} from "@angular/core";

@Component({
  selector: "app-header-component",
  templateUrl: "./header-component.component.html",
  styleUrls: ["./header-component.component.css"],
})
export class HeaderComponentComponent implements OnInit, AfterViewInit {
  //constructor() {}
  myarr = [];
  scrollval: any;
  stickyoffset: any;
  geety: any;
  tr: boolean = false;
  @ViewChild("sticky", { read: ElementRef }) getelement: ElementRef;
  ngOnInit(): void {
    //console.log(this.getelement.nativeElement);
    //this.myarr.push(this.getelement.nativeElement);
    console.log(this.scrollval);
  }
  ngAfterViewInit() {
    this.stickyoffset = this.getelement.nativeElement.offsetTop;
  }

  click: boolean = false;

  OnclickHandler(event: Event) {
    console.log("hello");
    event.preventDefault();
    this.click = !this.click;
    //console.log(this.getelement.first);
  }

  onclick(event) {
    //console.log(event);

    if (event.nextSibling.style.display === "block") {
      event.nextSibling.style.display = "none";
    } else {
      event.nextSibling.style.display = "block";
    }
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.scrollval = window.pageYOffset;
  }

  panelClick(get) {
    if (get.nextSibling.style.display === "block") {
      get.nextSibling.style.display = "none";
    } else {
      get.nextSibling.style.display = "block";
    }
  }

  expanall(ve: Event, local1, local2, local3, local5, local7) {
    console.log(this.geety);

    // local1.nextSibling.style.display = "block";
    // local2.nextSibling.style.display = "block";
    // local3.nextSibling.style.display = "block";
    // local5.nextSibling.style.display = "block";
    // local7.nextSibling.style.display = "block";

    const arr = [local1, local2, local3, local5, local7];
    console.log(arr);
    for (const i of arr) {
      if (i.nextSibling.style.display == "block") {
        i.nextSibling.style.display = "none";
      } else {
        i.nextSibling.style.display = "block";
      }
    }

    ve.preventDefault();
    this.tr = !this.tr;
  }
}
