import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Project } from '../../../models/project.model';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { BackgroundBlurComponent } from '../background-blur/background-blur.component';

@Component({
  selector: 'app-projects-showcase',
  standalone: true,
  imports: [CommonModule, RouterModule, BackgroundBlurComponent],
  templateUrl: './projects-showcase.component.html',
  styleUrls: ['./projects-showcase.component.css'],
})
export class ProjectShowcaseComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.route.fragment.subscribe((frag) => {
          if (frag) {
            const element = document.getElementById(frag);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }
        });
      }
    });
  }

  defaultImage: string = 'assets/images/default_project_thumbnail.png';

  // Projects can have custome images just add
  // image: 'assets/images/[Ur Project Image]';
  // to the project object
  projects: Project[] = [
    {
      id: 1,
      name: 'Project Guide',
      description: 'How to crate a new project.',
    },
    {
      id: 2,
      name: 'Fancy Hover Effects',
      description: 'Trying out some hover effects here, nothing specal',
    },
    {
      id: 3,
      name: 'Project Three',
      description: 'This is a test project',
    },
    {
      id: 4,
      name: 'Project four',
      description: 'This is a test project',
    },
    {
      id: 5,
      name: 'Project five',
      description: 'This is a test project',
    },
  ];
}
