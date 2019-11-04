import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ HttpClientModule } from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RepositoryComponent } from './repository/repository.component';
import { HighlightDirective } from './highlight.directive';
import { DatesPipe } from './dates.pipe';
import { UserFormComponent } from './user-form/user-form.component';
import { FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    NavbarComponent,
    RepositoryComponent,
    HighlightDirective,
    DatesPipe,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
