/* import { Component } from '@angular/core';

@Component({
  selector: 'app-color-select',
  templateUrl: './color-select.component.html',
  styleUrls: ['./color-select.component.scss']
})
export class ColorSelectComponent {

} */

import { Component } from '@angular/core';

@Component({
  selector: 'app-color-select',
  templateUrl: './color-select.component.html',
  styleUrls: ['./color-select.component.scss']
})
export class ColorSelectComponent {
  buttonColors: string[] = ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink', 'cyan', 'gray', 'brown', 'teal', 'indigo', 'lime', 'magenta', 'violet', 'turquoise'];
}