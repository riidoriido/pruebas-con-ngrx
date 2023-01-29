import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { change } from 'src/app/store/boolean/boolean.actions';

@Component({
  selector: 'app-boolean',
  templateUrl: './boolean.component.html',
  styleUrls: ['./boolean.component.scss'],
})
export class BooleanComponent {
  public property = false;

  constructor(private readonly store: Store<AppState>) {
    this.store
      .select('booleanState')
      .subscribe((state) => (this.property = state.property));
  }

  setBool() {
    this.store.dispatch(change());
  }
}
