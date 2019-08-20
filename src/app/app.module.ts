import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { InsertComponent } from './insert/insert.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule} from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { DbserviceService } from './dbservice.service';

@NgModule({
  declarations: [
    AppComponent,
    DeleteComponent,
    DisplayComponent,
    EditComponent,
    InsertComponent,
    SearchComponent,
    UpdateComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [DbserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
