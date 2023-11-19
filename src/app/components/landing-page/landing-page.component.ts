import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Project } from '../../models/project.model';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.route.fragment.subscribe(frag => {
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
  projects: Project[] = [
    {
      id: 1,
      name: 'Project One',
      description: 'This is a test project',
      link: '/project-one'
    },
    {
      id: 2,
      name: 'Project Two',
      description: 'This is a test project',
      link: '/project-two'
    },
    {
      id: 3,
      name: 'Project Three',
      description: 'This is a test project',
      link: '/project-three'
    },
    {
      id: 4,
      name: 'Project four',
      description: 'This is a test project',
      link: '/project-four'
    },
    {
      id: 5,
      name: 'Project five',
      description: 'This is a test project',
      link: '/project-five'
    }
  ];
}
