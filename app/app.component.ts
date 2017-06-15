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
    new Animal('Thunder Lion', 'Zeus', 13, 'Zeus is our longest companion. After being rescued from a group of poachers who wanted him as a status symbol, he\'s made his home here with us. He is very quiet and calm, as if he is watching everything around him to calculate his next move.', 'Melancholic', 'Carnivore', 'Mt. Olympus', 3, 'Male', 'Observing those around him', 'Signs of disrespect', './../resources/images/animals/zeus.jpg'),
    new Animal('Red-Nosed Bat', 'Laylee', 2, 'If you could take sassiness and put it into a physical form, you\'d have Laylee. She is the queen of the attitude and she makes sure you know it. While coming off irritable and rude, she warms up to most of our regulars and really starts to show she loves people after awhile.', 'Choleric', 'Frugivore', 'Shipwreck Creek', 2, 'Female', 'Being sassy', 'Being labeled a vampire', './../resources/images/animals/laylee.jpg'),
    new Animal('Pantsless Chameleon', 'Yooka', 3, 'Yooka is the nicest guy chameleon you will ever meet. He is always going on adventures and you are guaranteed to have a fun time watching him explore for hours on end.', 'Sanguine', 'Insectivore', 'Shipwreck Creek', 1, 'Male', 'Lounging around', 'Stressful environments', './../resources/images/animals/yooka.jpg'),
    new Animal('Brown Honey Bear', 'Banjo', 8, 'Adventure is seriously Banjo\'s middle name. He loves running around and checking out all the new people that come up to see him. He may be big and scary seeming at first, but he is the friendliest bear around and you\'re bound to have a great time around him.', 'Sanguine', 'Omnivore', 'Spiral Mountain', 4, 'Male', 'Adventures', 'People dressed up as witches', './../resources/images/animals/banjo.jpg'),
    new Animal('Red-Crested Breegul', 'Kazooie', 9, 'Kazooie is kind of a snob. She thinks she is the coolest bird in town and makes sure you know it. It\'s hard to tell what she really thinks of people because she kind of hangs at a constant state of snappy.', 'Choleric', 'Omnivore', 'Spiral Mountain', 2, 'Female', 'Insulting people', 'Most things', './../resources/images/animals/kazooie.jpg'),
    new Animal('Twilight Wolf', 'Link', 5, 'There isn\'t much to be said about Link. He doesn\'t talk much and he kind of hangs out by himself. You can tell he isn\'t afraid of much though because even with all the commotion of the zoo, he never gets too stressed.', 'Phlegmatic', 'Carnivore', 'Hyrule', 3, 'Male', 'Acts of courage', 'Talking', './../resources/images/animals/link.jpg')
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
