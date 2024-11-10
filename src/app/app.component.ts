import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WhatComponent } from "./what/what.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WhatComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'skaiciuokle';
}
