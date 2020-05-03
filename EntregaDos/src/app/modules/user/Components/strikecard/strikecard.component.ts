import { Component, OnInit, Input } from '@angular/core';
import { Marcha } from 'src/app/models/Marcha';

@Component({
  selector: 'app-strikecard',
  templateUrl: './strikecard.component.html',
})
export class StrikecardComponent implements OnInit {
  @Input() strike: Marcha;

  constructor() {}

  ngOnInit(): void {}
}
