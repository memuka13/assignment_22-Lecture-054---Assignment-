import { Injectable } from '@angular/core';
import { Job, Person, Person2 } from './app.models';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  data: Person[] = [
    { name: 'James', surname: 'Miller', age: 55 },
    { name: 'Emily', surname: 'Miller', age: 13 },
    { name: 'Emily', surname: 'Jones', age: 12 },
    { name: 'Ashley', surname: 'Jones', age: 74 },
    { name: 'James', surname: 'Johnson', age: 97 },
    { name: 'William', surname: 'Smith', age: 94 },
    { name: 'David', surname: 'Moore', age: 47 },
    { name: 'Olivia', surname: 'Brown', age: 81 },
    { name: 'Jane', surname: 'Jones', age: 47 },
    { name: 'Michael', surname: 'Davis', age: 13 },
    { name: 'Michael', surname: 'Davis', age: 52 },
    { name: 'Jane', surname: 'Davis', age: 24 },
    { name: 'Olivia', surname: 'Wilson', age: 60 },
    { name: 'William', surname: 'Williams', age: 51 },
    { name: 'Ashley', surname: 'Moore', age: 26 },
    { name: 'Olivia', surname: 'Doe', age: 63 },
    { name: 'Emily', surname: 'Brown', age: 98 },
    { name: 'Jane', surname: 'Johnson', age: 40 },
    { name: 'Ashley', surname: 'Miller', age: 58 },
    { name: 'David', surname: 'Brown', age: 71 },
    { name: 'David', surname: 'Jones', age: 35 },
    { name: 'Olivia', surname: 'Miller', age: 6 },
    { name: 'William', surname: 'Jones', age: 83 },
    { name: 'John', surname: 'Doe', age: 20 },
    { name: 'Emily', surname: 'Brown', age: 65 },
    { name: 'Jane', surname: 'Davis', age: 2 },
    { name: 'David', surname: 'Moore', age: 47 },
    { name: 'Jane', surname: 'Moore', age: 64 },
    { name: 'Olivia', surname: 'Wilson', age: 1 },
    { name: 'David', surname: 'Miller', age: 14 },
    { name: 'Ashley', surname: 'Johnson', age: 15 },
    { name: 'John', surname: 'Johnson', age: 13 },
    { name: 'Madison', surname: 'Doe', age: 78 },
    { name: 'Michael', surname: 'Doe', age: 64 },
    { name: 'James', surname: 'Smith', age: 32 },
    { name: 'David', surname: 'Doe', age: 59 },
    { name: 'Emily', surname: 'Smith', age: 51 },
    { name: 'James', surname: 'Doe', age: 71 },
    { name: 'Olivia', surname: 'Moore', age: 7 },
    { name: 'David', surname: 'Wilson', age: 86 },
    { name: 'William', surname: 'Williams', age: 36 },
    { name: 'Madison', surname: 'Moore', age: 6 },
    { name: 'David', surname: 'Davis', age: 72 },
    { name: 'Emily', surname: 'Miller', age: 95 },
    { name: 'Emily', surname: 'Davis', age: 31 },
    { name: 'David', surname: 'Smith', age: 49 },
    { name: 'Olivia', surname: 'Johnson', age: 3 },
    { name: 'Jane', surname: 'Wilson', age: 17 },
    { name: 'Ashley', surname: 'Miller', age: 81 },
    { name: 'John', surname: 'Doe', age: 54 },
  ];

  data2: Person2[] = [
    { name: 'James', lastname: 'Miller', id: 1, jobId: 1 },
    { name: 'Emily', lastname: 'Miller', id: 2, jobId: 2 },
    { name: 'Emily', lastname: 'Jones', id: 3, jobId: 3 },
    { name: 'Ashley', lastname: 'Jones', id: 4, jobId: 4 },
    { name: 'James', lastname: 'Johnson', id: 5, jobId: 1 },
    { name: 'William', lastname: 'Smith', id: 6, jobId: 1 },
    { name: 'David', lastname: 'Moore', id: 7, jobId: 3 },
    { name: 'Olivia', lastname: 'Brown', id: 8, jobId: 2 },
    { name: 'Jane', lastname: 'Jones', id: 9, jobId: 3 },
    { name: 'Michael', lastname: 'Davis', id: 10, jobId: 1 },
  ];

  jobsData: Job[] = [
    { id: 1, name: 'Developer' },
    { id: 2, name: 'Director' },
    { id: 3, name: 'Manager' },
    { id: 4, name: 'Doctor' },
  ];
}
