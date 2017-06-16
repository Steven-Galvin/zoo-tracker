import { Component, Output, Input, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-details',
  template: `
  <hr>
  <h3>{{childSelectedAnimal.name}} Details:</h3>
  <img src="{{childSelectedAnimal.image}}"/>
  <br>
  <em>{{childSelectedAnimal.description}}</em><hr>
  <strong>Species:</strong> {{childSelectedAnimal.species}}
  <br>
  <strong>Age:</strong> {{childSelectedAnimal.age}} y/o
  <br>
  <strong>Diet:</strong> {{childSelectedAnimal.diet}}
  <br>
  <strong>Location:</strong> {{childSelectedAnimal.location}}
  <br>
  <strong>Number of Caretakers:</strong> {{childSelectedAnimal.caretakers}}
  <br>
  <strong>Sex:</strong> {{childSelectedAnimal.sex}}
  <br>
  <strong>Likes:</strong> {{childSelectedAnimal.likes}}
  <br>
  <strong>Dislikes:</strong> {{childSelectedAnimal.dislikes}}
  <br>
  <br>
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
