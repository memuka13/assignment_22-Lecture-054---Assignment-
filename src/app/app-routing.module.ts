import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetPeopleComponent } from './get-people/get-people.component';
import { InfiniteScrollComponent } from './infinite-scroll/infinite-scroll.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'task1',
    pathMatch: 'full',
  },
  {
    path: 'task1',
    component: SearchComponent,
  },
  {
    path: 'task2',
    component: InfiniteScrollComponent,
  },
  {
    path: 'task3',
    component: GetPeopleComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
