import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements OnInit {
  @Input()
  animate: boolean;
  @Input()
  minimalism = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  changeAnimate(): void {
    this.animate = !this.animate;
  }
}
