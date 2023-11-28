import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-guide',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-guide.component.html',
  styleUrl: './project-guide.component.css',
})
export class ProjectGuideComponent implements OnInit {
  projectId: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.projectId = id;
    } else {
      console.log('du machst was falsch jooonges, was des für ne id man: ', id);
    }
  }
}
