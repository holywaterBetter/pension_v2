import { Component } from '@angular/core';
import { GoogleSheetService } from '../google-sheet.service';

interface Data {
  date: Date | null | undefined;
  time: string | undefined;
  member: number | undefined;
  name: string | undefined;
}

@Component({
  selector: 'food-reservation',
  templateUrl: './food-reservation.component.html',
  styleUrls: ['./food-reservation.component.scss'],
})
export class FoodReservationComponent {
  constructor(googleSheetService: GoogleSheetService) {
    googleSheetService.test();
  }
  panelOpenStates = {
    date: true,
    time: false,
    member: false,
    name: false,
  };
  data: Data = {
    date: undefined,
    time: undefined,
    member: undefined,
    name: undefined,
  };

  private _selected: Date | null;
  get selected(): Date | null {
    return this._selected;
  }
  set selected(v) {
    this._selected = v;
    this.panelOpenStates.date = false;
    this._updatePanelOpenStates();
  }

  private _updatePanelOpenStates() {
    // Object.keys(this.panelOpenStates).
  }

  private today = new Date();

  get selectedDate(): string {
    if (this.selected) {
      return `${this.selected.getFullYear()}-${
        this.selected.getMonth() + 1
      }-${this.selected.getDate()}`;
    }
    return '예약일을 선택하세요.';
  }

  dateFilter = (date: Date): boolean => {
    return this.today <= date;
  };
}
