import { BrowserModule } from "@angular/platform-browser";
import {} from "@angular/router";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponentComponent } from "./header-component/header-component.component";
import { DisplayDirective } from "./display.directive";

import { GetPipe } from "./pipes/pipes.pipe";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    DisplayDirective,
    GetPipe,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
