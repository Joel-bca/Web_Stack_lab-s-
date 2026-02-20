import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events',
  standalone: true,
  templateUrl: './events.component.html',
  styleUrl: './event.component.css'
})
export class EventsComponent {

  constructor(private router: Router) {}

  register() {
    this.router.navigate(['/register']);
  }
}