import { Component, AfterViewInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavBarComponent, LandingPageComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'Superbekanntenkreis';
  
  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    const blob = this.renderer.selectRootElement('#blob');

    window.onpointermove = event => {
      const { clientX, clientY } = event;

      this.renderer.setStyle(blob, 'left', `${clientX}px`);
      this.renderer.setStyle(blob, 'top', `${clientY}px`);
    };
  }
}