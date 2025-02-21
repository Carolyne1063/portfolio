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
  typingSpeed = 100;
  erasingSpeed = 50;
  delayBetween = 1500;
  textIndex = 0;
  charIndex = 0;
  displayText = "";
  isDeleting = false;
  imageVisible = false;

  ngOnInit() {
    this.imageVisible = true; // Triggers fade-in
    this.typeEffect();
  }

  typeEffect() {
    const currentText = this.textArray[this.textIndex];

    if (this.isDeleting) {
      this.displayText = currentText.substring(0, this.charIndex--);
    } else {
      this.displayText = currentText.substring(0, this.charIndex++);
    }

    setTimeout(() => {
      if (!this.isDeleting && this.charIndex === currentText.length) {
        this.isDeleting = true;
        setTimeout(() => this.typeEffect(), this.delayBetween);
      } else if (this.isDeleting && this.charIndex === 0) {
        this.isDeleting = false;
        this.textIndex = (this.textIndex + 1) % this.textArray.length;
        setTimeout(() => this.typeEffect(), 500);
      } else {
        this.typeEffect();
      }
    }, this.isDeleting ? this.erasingSpeed : this.typingSpeed);
  }
}
