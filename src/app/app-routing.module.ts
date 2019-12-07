import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CvComponent} from './cv/cv.component';


const routes: Routes = [
  {path: '', redirectTo: 'cv/1', pathMatch: 'full'},
  {path: 'cv/:all', component: CvComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
