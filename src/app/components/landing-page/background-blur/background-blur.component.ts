import { AfterViewInit, Component, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-background-blur',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './background-blur.component.html',
  styleUrl: './background-blur.component.css',
})
export class BackgroundBlurComponent implements AfterViewInit {
  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    const blob = this.renderer.selectRootElement('#blob');

    window.onpointermove = (event) => {
      const { pageX, pageY } = event;

      this.renderer.setStyle(blob, 'left', `${pageX}px`);
      this.renderer.setStyle(blob, 'top', `${pageY}px`);
    };
  }
}
