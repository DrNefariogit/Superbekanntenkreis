import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-guide',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-guide.component.html',
  styleUrls: ['./project-guide.component.css'],
})
export class ProjectGuideComponent implements OnInit {
  projectId: string | null = null;

  // Use backticks for multiline strings
  generateComponentCode = 'ng generate component <component-name>';
  componentObjectCode = `{
    id: 1,
    name: 'Project Name',
    description: 'project description here'
  }`;
  projectPathCode = `{
    path: 'project/[id]',
    component: [YourProjectComponent]
  }`;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.projectId = id;
    } else {
      console.log('Fehler bei der ID-Verarbeitung: ', id);
    }
  }

  copyTextToClipboard(text: string): void {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(
        () => console.log(`Copied to clipboard: ${text}`),
        (err) => console.error('Could not copy text: ', err)
      );
    } else {
      console.warn('Clipboard API not available.');
    }
  }
}
