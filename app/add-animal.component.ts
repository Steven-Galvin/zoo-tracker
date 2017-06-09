import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'add-animal',
  template: `
    <hr>
    <h2>New Animal</h2>
    <div>
    <label>Species:</label>
    <input class="form-control" #newSpecies><br>
    <label>Name:</label>
    <input class="form-control" #newName><br>
    <label>Age:</label>
    <input type="number" class="form-control" #newAge><br>
    <label>Diet:</label>
    <input class="form-control" #newDiet><br>
    <label>Location:</label>
    <input class="form-control" #newLocation><br>
    <label>Number of Caretakers:</label>
    <input type="number" class="form-control" #newCaretakers><br>
    <label>Sex:</label>
    <input class="form-control" #newSex><br>
    <label>Likes:</label>
    <input class="form-control" #newLikes><br>
    <label>Dislikes:</label>
    <input class="form-control" #newDislikes><br>
    <button class="btn btn-sm" (click)="submitForm(
      newSpecies.value,
      newName.value,
      newAge.value,
      newDiet.value,
      newLocation.value,
      newCaretakers.value,
      newSex.value,
      newLikes.value,
      newDislikes.value);
      newSpecies.value='';
      newName.value='';
      newAge.value='';
      newDiet.value='';
      newLocation.value='';
      newCaretakers.value='';
      newSex.value='';
      newLikes.value='';
      newDislikes.value='';">Add Animal</button>
      <button class="btn btn-sm" (click)="cancelForm()">Cancel</button>
    </div>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();
  @Output() animalFormHide = new EventEmitter();

  submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string) {
    var newAnimal: Animal = new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes);
    this.newAnimalSender.emit(newAnimal);
  }

  cancelForm() {
    this.animalFormHide.emit();
  }
}