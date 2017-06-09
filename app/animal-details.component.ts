import { Component, Output, Input, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-details',
  template: `
  <hr>
  <h3>{{childSelectedAnimal.name}} Details:</h3>
  <h5>Species: {{childSelectedAnimal.species}}</h5>
  <h5>Age: {{childSelectedAnimal.age}} y/o</h5>
  <h5>Diet: {{childSelectedAnimal.diet}}</h5>
  <h5>Location: {{childSelectedAnimal.location}}</h5>
  <h5>Number of Caretakers: {{childSelectedAnimal.caretakers}}</h5>
  <h5>Sex: {{childSelectedAnimal.sex}}</h5>
  <h5>Likes: {{childSelectedAnimal.likes}}</h5>
  <h5>Dislikes: {{childSelectedAnimal.dislikes}}</h5>
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
