import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyfirstComponentComponent } from './myfirst-component/myfirst-component.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponentComponent } from './about-component/about-component.component';
@NgModule({
  declarations: [
    AppComponent,
    MyfirstComponentComponent,
    AboutComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
