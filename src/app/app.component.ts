import { Component, OnInit, VERSION } from '@angular/core';
import { of, from } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    of(1, 2, 3).subscribe((item) => console.log(item));
    from([1, 2, 3]).subscribe({
      next: (item) => console.log(item),
      error: (err) => console.log(err),
      complete: () => console.log('complete'),
    });
  }
  name = 'Angular ' + VERSION.major;
}
