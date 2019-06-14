import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SetListComponent } from './Set-list/Set-list.component';
import { EditSetComponent } from './edit-Set/edit-Set.component';
import { NewSetComponent } from './new-Set/new-Set.component';
import { ThemePipe } from './theme.pipe';
import { CategoryPipe } from './category.pipe';
import { YearPipe } from './year.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SetListComponent,
    EditSetComponent,
    NewSetComponent,
    ThemePipe,
    YearPipe,
    CategoryPipe
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
