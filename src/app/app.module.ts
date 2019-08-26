import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { OvertredingService } from './service/overtreding.service';
import { OvertredingComponent } from './component/overtreding.component';
import { SearchComponent } from './component/search.component';


const appRoutes: Routes = [
  { path: "list", component: OvertredingComponent },
  { path: "search", component: SearchComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    OvertredingComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    FormsModule, ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [OvertredingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
