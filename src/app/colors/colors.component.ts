import { Component, OnInit } from '@angular/core';

import { Color } from "../color";
import { COLORS } from '../mock-colors';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss']
})
export class ColorsComponent implements OnInit {

  public colors: Color[] = COLORS;

  constructor() { }

  ngOnInit(): void {
  }

  public changeColor(color: Color, colorCode: string): void {
    color.value = colorCode;
  }

}
