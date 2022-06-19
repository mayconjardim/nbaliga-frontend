import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

   public isMenuOpen = true;

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit( ): void {
    this.isMenuOpen = true;
  }

  get isHandset(): boolean {
    return this.breakpointObserver.isMatched(Breakpoints.Handset);
}

ngDoCheck() {
  if (this.isHandset) {
     this.isMenuOpen = false;
  } else {
     this.isMenuOpen = true;
  }
}


}
