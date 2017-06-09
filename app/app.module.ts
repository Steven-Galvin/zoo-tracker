import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NewAnimalComponent } from './add-animal.component';
import { AppComponent } from './app.component';
import { FormsModule }  from '@angular/forms';

@NgModule({
  imports: [ BrowserModule,
             FormsModule ],
  declarations: [ AppComponent, NewAnimalComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
