import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SetListComponent } from './Set-list/Set-list.component';
import { EditSetComponent } from './edit-Set/edit-Set.component';
import { NewSetComponent } from './new-Set/new-Set.component';
import { DeleteSetComponent } from './delete-set/delete-set.component';
import { AdminComponent } from './admin/admin.component';
import { SetDetailComponent } from './set-detail/set-detail.component';
import { HomeComponent } from './home/home.component';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { routing } from './app.routing';
import { ThemePipe } from './theme.pipe';
import { CategoryPipe } from './category.pipe';
import { YearPipe } from './year.pipe';
import { BrowseComponent } from './browse/browse.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    SetListComponent,
    EditSetComponent,
    NewSetComponent,
    ThemePipe,
    YearPipe,
    CategoryPipe,
    DeleteSetComponent,
    AdminComponent,
    SetDetailComponent,
    HomeComponent,
    BrowseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
