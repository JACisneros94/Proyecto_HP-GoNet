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

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FiltersComponent,
    CardsComponent,
    CardComponent,
    FavListComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
