import { Component } from '@angular/core';
import { BarserviceComponent } from '../barservice/barservice.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [BarserviceComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  correo: string = "info@misitio.com";

}
