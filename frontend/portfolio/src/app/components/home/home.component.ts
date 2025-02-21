import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1.5s ease-in', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('1.5s ease-out', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class HomeComponent {
  textArray: string[] = ["Full Stack Engineer", "Backend Engineer", "Frontend Engineer", "Web Designer"];
  techStackLogos = [
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', alt: 'HTML' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', alt: 'CSS' },
    { src:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', alt: 'Typescript'},
    { src:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', alt: 'Javascript'},
    { src:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg', alt: 'Angular'},
    { src:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', alt: 'Figma'},
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', alt: 'Tailwind' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', alt: 'Node.js' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', alt: 'Express' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg', alt: 'Nginx' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Karma.svg', alt: 'Karma' },
    { src: 'https://raw.githubusercontent.com/testing-library/cypress-testing-library/main/logo.png', alt: 'Cypress' },
    { src: 'https://jasmine.github.io/images/jasmine-logo.png', alt: 'Jasmine' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-original.svg', alt: 'SQL Server' },
    { src:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', alt: 'MySQL'},
  ];
  typingSpeed = 100; // Speed of typing
  erasingSpeed = 50; // Speed of erasing
  delayBetween = 1500; // Delay before changing text
  textIndex = 0;
  charIndex = 0;
  displayText = "";
  isDeleting = false;

  ngOnInit() {
    this.typeEffect();
  }

  typeEffect() {
    const currentText = this.textArray[this.textIndex];

    if (!this.isDeleting && this.charIndex <= currentText.length) {
      this.displayText = currentText.substring(0, this.charIndex++);
    } else if (this.isDeleting && this.charIndex >= 0) {
      this.displayText = currentText.substring(0, this.charIndex--);
    }

    if (!this.isDeleting && this.charIndex === currentText.length + 1) {
      this.isDeleting = true;
      setTimeout(() => this.typeEffect(), this.delayBetween);
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.textIndex = (this.textIndex + 1) % this.textArray.length;
      setTimeout(() => this.typeEffect(), 500);
    } else {
      setTimeout(() => this.typeEffect(), this.isDeleting ? this.erasingSpeed : this.typingSpeed);
    }
  }
}
