import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="jumbotron">
    <div class="container">
      <h1>Pandamonium</h1>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-md-8">
        <select class="form-control" id="select" (change)="onChange($event.target.value)">
          <option value="allAnimals" selected="selected">All Animals</option>
          <option value="youngins">Youngins</option>
          <option value="veterans">Veterans</option>
          <option value="male">Males</option>
          <option value="female">Females</option>
        </select>
        <select class="form-control" id="select2" (change)="onChange($event.target.value)">
          <option value="allLocations" selected="selected">All Locations</option>
          <option value="mtOlympus">Mt. Olympus</option>
          <option value="hyrule">Hyrule</option>
          <option value="shipwreckCreek">Shipwreck Creek</option>
          <option value="spiralMountain">Spiral Mountain</option>
        </select>
        <div id="animals" (click)="selectedAnimalDetails(currentAnimal)" *ngFor="let currentAnimal of masterAnimalList | sort:filterAnimals | sortLocation:filterLocations">
          <h5>{{currentAnimal.name}}</h5>
          Species: {{currentAnimal.species}}<br>
          Age: {{currentAnimal.age}} y/o
        </div>
      </div>
      <div id="info" class="col-md-4">
        <h1>Info:</h1>
        <button class="btn btn-sm" (click)="animalFormShow()">Add An Animal</button>
        <animal-details *ngIf="animalDetails" [childSelectedAnimal]="animalDetails"  (hideButtonClickedSender)="hideDetails()" (updateButtonClickedSender)="updateAnimal()"></animal-details>
        <add-animal *ngIf="animalForm === true" (newAnimalSender)="addAnimal($event)" (animalFormHide)="cancelForm()"></add-animal>
      </div>
    </div>
  </div>
  `
})

export class AppComponent {
  animalForm: boolean = false;
  animalDetails = null;
  selectedAnimal = null;
  filterAnimals: string = "allAnimals";
  filterLocations: string = "allLocations";

  masterAnimalList: Animal[] = [
    new Animal('Thunder Lion', 'Zeus', 13, 'Carnivore', 'Mt. Olympus', 3, 'Male', 'Being the center of attention', 'Signs of disrespect'),
    new Animal('Red-Nosed Bat', 'Laylee', 2, 'Frugivore', 'Shipwreck Creek', 2, 'Female', 'Being sassy', 'Being labeled a vampire'),
    new Animal('Pantsless Chameleon', 'Yooka', 3, 'Insectivore', 'Shipwreck Creek', 1, 'Male', 'Lounging around', 'Stressful environments'),
    new Animal('Brown Honey Bear', 'Banjo', 8, 'Omnivore', 'Spiral Mountain', 4, 'Male', 'Adventures', 'People dressed up as witches'),
    new Animal('Red-Crested Breegul', 'Kazooie', 9, 'Omnivore', 'Spiral Mountain', 2, 'Female', 'Insulting people', 'Most things'),
    new Animal('Twilight Wolf', 'Link', 5, 'Carnivore', 'Hyrule', 3, 'Male', 'Acts of courage', 'Talking')
  ];

  onChange(menuOption) {
    this.filterLocations = menuOption
    this.filterAnimals = menuOption
}

  hideDetails() {
    this.animalDetails = null;
  }

  animalFormShow() {
    this.animalForm = true;
  }

  cancelForm() {
    this.animalForm = false;
  }

  addAnimal(newAnimal) {
    this.animalForm = false;
    this.masterAnimalList.push(newAnimal)
  }

  selectedAnimalDetails(animalToView: Animal) {
    this.animalDetails = animalToView;
  }
}
