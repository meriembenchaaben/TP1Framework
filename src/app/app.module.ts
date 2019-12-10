import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AlertModule} from 'ngx-bootstrap';
import { CvComponent } from './cv/cv.component';
import { DetailComponent } from './cv/detail/detail.component';
import { ListeComponent } from './cv/liste/liste.component';
import { ItemComponent } from './cv/liste/item/item.component';
import { WordComponent } from './word/word.component';
import {FormsModule} from '@angular/forms';
import { ArcEnCielDirective } from './arc-en-ciel.directive';
import { DefaultImagePipe } from './default-image.pipe';
import { SliderComponent } from './slider/slider.component';
import { ListeembauchesComponent } from './cv/liste/listeembauches/listeembauches.component';
import { HeaderComponent } from './header/header.component';
import { MoreDetailsComponent } from './cv/more-details/more-details.component';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    DetailComponent,
    ListeComponent,
    ItemComponent,
    WordComponent,
    ArcEnCielDirective,
    DefaultImagePipe,
    SliderComponent,
    ListeembauchesComponent,
    HeaderComponent,
    MoreDetailsComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
