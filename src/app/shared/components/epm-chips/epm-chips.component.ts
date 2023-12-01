import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { INTEREST_CHIPS_NAMES } from '../../../app.config';

@Component({
  selector: 'epm-chips',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './epm-chips.component.html',
  styleUrls: ['./epm-chips.component.scss']
})
export class EpmChipsComponent {
  @Input() chips!: string;
  @Input() isEditable = false;
  @Input() isActive = false;

  @Output() editChipsStatus: EventEmitter<string> = new EventEmitter<string>();

  getImgSrc(chipsName: string): string {

    return 'assets/icons/' + chipsName.toLowerCase() + '.svg';
  }

  getEditableIcon(isEditable: boolean) : string {
    return 'assets/icons/' + (isEditable ? 'cross' : 'plus') + '.svg'
  }

  onClick() : void {
    if(this.isEditable) {
      this.editChipsStatus.emit(this.chips)
    }
  }


}
