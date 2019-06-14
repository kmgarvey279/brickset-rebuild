import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SetListComponent } from './Set-list/Set-list.component';
import { EditSetComponent } from './edit-Set/edit-Set.component';
import { NewSetComponent } from './new-Set/new-Set.component';


@NgModule({
  declarations: [
    AppComponent,
    SetListComponent,
    EditSetComponent,
    NewSetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
