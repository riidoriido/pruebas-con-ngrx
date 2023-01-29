import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import {
  decrease,
  increment,
  reset,
} from 'src/app/store/counter/counter.actions';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
})
export class ButtonsComponent {
  constructor(private readonly store: Store<AppState>) {}

  increment() {
    this.store.dispatch(increment());
  }
  decrease() {
    this.store.dispatch(decrease());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
