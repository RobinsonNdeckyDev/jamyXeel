import {Component} from '@angular/core';
import {DatePipe, NgIf} from "@angular/common";


@Component({
  selector: 'app-details-blog',
  standalone: true,
    imports: [
        NgIf,
        DatePipe
    ],
  templateUrl: './details-blog.component.html',
  styleUrl: './details-blog.component.css'
})
export class DetailsBlogComponent {
   

}
