import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CvComponent} from './cv/cv.component';
import {FormComponent} from './form/form.component';


const routes: Routes = [
  {path: '', redirectTo: 'cv/1', pathMatch: 'full'},
  {path: 'cv/:all', component: CvComponent},
  {path: 'update/:id', component: FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
