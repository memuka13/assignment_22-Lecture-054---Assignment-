import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { Person } from '../app.models';
import { AppService } from '../app.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  data: Person[] = this.AppService.data;
  constructor(private AppService: AppService) {}
  list: Person[] | [] = [];

  search: FormControl = new FormControl();
  result: string = '';

  callApi(value: string, data: Person[]) {
    let result: Person[] = [];

    result = data.filter((el) => {
      if (
        el.name.match(new RegExp(value, 'i')) ||
        el.surname.match(new RegExp(value, 'i')) ||
        el.age.toString().match(new RegExp(value, 'i'))
      ) {
        return el;
      }
      return;
    });
    return result;
  }

  ngAfterViewInit() {
    this.search.valueChanges
      .pipe(debounceTime(600), distinctUntilChanged())
      .subscribe((x) => {
        if (x) {
          this.list = this.callApi(x, this.data);
        }
      });
  }
}
