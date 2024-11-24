import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CourierComponent } from './courier/courier.component';
import { CourierMockService } from './courier/courier.mock.service';

@NgModule({
  declarations: [
    AppComponent,
    CourierComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CourierMockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
