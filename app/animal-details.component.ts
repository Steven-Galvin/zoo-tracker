import { Component, Output, Input, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-details',
  template: `
  <hr>
  <h3>{{childSelectedAnimal.name}} Details:</h3>
  <img src="{{childSelectedAnimal.image}}"/><br>
  <em>{{childSelectedAnimal.description}}</em><hr>
  <strong>Species: {{childSelectedAnimal.species}}</strong><br>
  <strong>Age: {{childSelectedAnimal.age}} y/o</strong><br>
  <strong>Diet: {{childSelectedAnimal.diet}}</strong><br>
  <strong>Location: {{childSelectedAnimal.location}}</strong><br>
  <strong>Number of Caretakers: {{childSelectedAnimal.caretakers}}</strong><br>
  <strong>Sex: {{childSelectedAnimal.sex}}</strong><br>
  <strong>Likes: {{childSelectedAnimal.likes}}</strong><br>
  <strong>Dislikes: {{childSelectedAnimal.dislikes}}</strong><br>
  <button class="btn btn-sm" (click)="hideButtonClicked()">Hide Details</button>
  <button class="btn btn-sm" (click)="editAnimal(childSelectedAnimal)">Edit Details</button>
  <edit-animal *ngIf="updateForm === true" [childSelectedAnimal]="selectedAnimal" (updateButtonClickedSender)="finishedEdit()"></edit-animal>
  `
})

export class AnimalDetailsComponent {
  @Input() childSelectedAnimal: Animal;

  @Output() hideButtonClickedSender = new EventEmitter();

  updateForm: boolean = false;
  selectedAnimal = null;

  finishedEdit() {
    this.updateForm = false;
  }

  editAnimal(animalToEdit: Animal) {
    this.updateForm = true;
    this.selectedAnimal = animalToEdit
  }

  hideButtonClicked() {
  this.hideButtonClickedSender.emit();
  }
}
