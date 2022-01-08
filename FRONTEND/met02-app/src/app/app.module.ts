import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgxsModule } from '@ngxs/store';
import { RefactorPhoneNumberPipe } from './refactor-phone-number.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    RefactorPhoneNumberPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot ()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
