import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { DonarService } from './donar.service';
import { ShowDonarComponent } from './show-donar/show-donar.component';
import { RequestDonarComponent } from './nested/request-donar/request-donar.component';
import { SendDonarComponent } from './nested/send-donar/send-donar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    ShowDonarComponent,
    RequestDonarComponent,
    SendDonarComponent
  ],
  imports: [
    BrowserModule , HttpClientModule , FormsModule
  ],
  providers: [HttpClient, DonarService],
  bootstrap: [RequestDonarComponent]
})
export class AppModule { }
