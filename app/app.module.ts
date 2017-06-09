import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NewAnimalComponent } from './add-animal.component';
import { EditAnimalComponent } from './edit-animal.component';
import { AnimalDetailsComponent } from './animal-details.component';
import { AppComponent } from './app.component';
import { FormsModule }  from '@angular/forms';
import { SortPipe } from './sort.pipe';
import { SortLocationPipe } from './sort-location.pipe';

@NgModule({
  imports: [ BrowserModule,
             FormsModule ],
  declarations: [ AppComponent, NewAnimalComponent, AnimalDetailsComponent, EditAnimalComponent, SortPipe, SortLocationPipe ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
