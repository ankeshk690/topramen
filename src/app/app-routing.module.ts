import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ReciepeComponent } from './reciepe/reciepe.component';

const routes: Routes = [
  { path: '',   redirectTo: '/main', pathMatch: 'full' },
  
  { path: 'main', component: MainpageComponent },
  { path: 'Myanmar', component: ReciepeComponent },
  { path: 'Singapore', component: ReciepeComponent },
  { path: 'SG', component: ReciepeComponent },
  { path: 'Taiwan', component: ReciepeComponent },
  { path: 'China', component: ReciepeComponent },
  { path: 'Malaysia', component: ReciepeComponent },
  { path: 'JPN', component: ReciepeComponent },
  { path: 'Thailand', component: ReciepeComponent },
  { path: 'Japan', component: ReciepeComponent },
  { path: 'South Korea', component: ReciepeComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
