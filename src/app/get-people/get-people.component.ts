import { Component, OnInit } from '@angular/core';
import {
  from,
  map,
  filter,
  mergeMap,
  of,
  concatMap,
  switchMap,
  reduce,
  toArray,
  take,
  last,
} from 'rxjs';
import { Job, Person2 } from '../app.models';
import { AppService } from '../app.service';

@Component({
  selector: 'app-get-people',
  templateUrl: './get-people.component.html',
  styleUrls: ['./get-people.component.scss'],
})
export class GetPeopleComponent implements OnInit {
  personsData: Person2[] = this.AppService.data2;
  jobsData: Job[] = this.AppService.jobsData;

  constructor(private AppService: AppService) {}

  ngOnInit() {
    const getPeople = (job: string[]) => {
      const arr: Job[] = [];

      job.forEach((el) => {
        this.jobsData.forEach((element) => {
          if (element.name === el) {
            arr.push(element);
          }
        });
      });

      const result: string[] = [];

      return from(this.personsData).pipe(
        mergeMap((x) => {
          return from(arr).pipe(
            map((y) => {
              if (x.jobId === y.id) {
                result.push(`${x.name} ${x.lastname} is a ${y.name}`);
              }
              return result;
            })
          );
        }),
        last()

        // map((x) => {
        //   arr.forEach((job) => {
        //     if (job.id === x.jobId) {
        //       result.push(`${x.name} ${x.lastname} is a ${job.name}`);
        //     }
        //   });
        //   return result;
        // })
      );
    };

    getPeople(['Developer', 'Doctor']).subscribe((x) => console.log(x));

    // x => ['ani mchedlidze is a developer', 'levan begashvili is a developer', 'giorgi bazera is a doctor']
  }
}
