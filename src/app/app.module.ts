import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FiltersComponent } from './filters/filters.component';
import { CardsComponent } from './cards/cards.component';
import { CardComponent } from './card/card.component';
import { FavListComponent } from './fav-list/fav-list.component';
import { ModalComponent } from './modal/modal.component';
import { ClickOutsideDirective } from './click-outside.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FiltersComponent,
    CardsComponent,
    CardComponent,
    FavListComponent,
    ModalComponent,
    ClickOutsideDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
