import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Person } from '../app.models';
import { AppService } from '../app.service';
import {
  of,
  from,
  Observable,
  map,
  take,
  fromEvent,
  filter,
  switchMap,
} from 'rxjs';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.component.html',
  styleUrls: ['./infinite-scroll.component.scss'],
})
export class InfiniteScrollComponent implements AfterViewInit {
  data: Person[] = this.AppService.data;

  constructor(private AppService: AppService) {}

  list: Person[] = [];

  @ViewChild('scrollContainer', { static: false })
  scrollContainer: ElementRef | undefined;

  obs$ = from(this.data)
    .pipe(
      map((person) => person),
      take(12)
    )
    .subscribe((x) => {
      this.list.push(x);
      this.data = this.data.filter((person) => person !== x);
    });

  ngAfterViewInit() {
    fromEvent(this.scrollContainer?.nativeElement, 'scroll')
      .pipe(
        map(() => this.scrollContainer?.nativeElement.scrollTop),
        filter((scrollTop) => {
          const maxScroll =
            this.scrollContainer?.nativeElement.scrollHeight -
            this.scrollContainer?.nativeElement.offsetHeight;
          return scrollTop === maxScroll;
        }),
        switchMap(() =>
          from(this.data).pipe(
            map((person) => person),
            take(12)
          )
        )
      )
      .subscribe((x) => {
        this.list.push(x);
        this.data = this.data.filter((person) => person !== x);
      });
  }
}
