import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { DonarService } from './donar.service';
import { ShowDonarComponent } from './show-donar/show-donar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    ShowDonarComponent
  ],
  imports: [
    BrowserModule , HttpClientModule
  ],
  providers: [HttpClient, DonarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
