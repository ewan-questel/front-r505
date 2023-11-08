/* import { Component } from '@angular/core';

@Component({
  selector: 'app-color-selector',
  templateUrl: './color-selector.component.html',
  styleUrls: ['./color-selector.component.scss']
})
export class ColorSelectorComponent {
  buttonColors: string[] = ['#D71E22', '#1D3CE9', '#1B913E', '#FF63D4', '#FF8D1C', '#FFFF67', '#1E1F26', '#E9F7FF', '#783DD2', '#80582D', '#44FFF7', '#5BFE4B', '#6C2B3D', '#FFD6EC', '#8397A7', '#EC7578'];
} */

// color-selector.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-color-selector',
  templateUrl: './color-selector.component.html',
  styleUrls: ['./color-selector.component.scss']
})
export class ColorSelectorComponent {
  @Input() color: string = 'default-color';
}