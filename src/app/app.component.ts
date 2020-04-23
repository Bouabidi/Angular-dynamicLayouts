import { Component } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';

export enum Layouts {
  centredContent,
  Main,
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Layouts = Layouts;
  layout: Layouts;

  constructor(private router: Router) {}

  // We can't use `ActivatedRoute` here since we are not within a `router-outlet` context yet.
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    this.router.events.subscribe((data) => {
      if (data instanceof RoutesRecognized) {
        this.layout = data.state.root.firstChild.data.layout;
      }
    });
  }
}
