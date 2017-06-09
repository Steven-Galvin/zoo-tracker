import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
  <div *ngIf="childSelectedAnimal">
      <hr>
      <h3>Edit {{childSelectedAnimal.name}}:</h3>
      <div>
        <label>Update Name:</label>
        <input class="form-control" [(ngModel)]="childSelectedAnimal.name"><br>
        <label>Update Age:</label>
        <input type="number" class="form-control" [(ngModel)]="childSelectedAnimal.age"><br>
        <label>Update Number of Caretakers:</label>
        <input class="form-control" [(ngModel)]="childSelectedAnimal.caretakers"><br>
        <button class="btn btn-sm" (click)="updateButtonClicked()">Update Changes</button>
      </div>
    </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() updateButtonClickedSender = new EventEmitter();

  updateButtonClicked() {
    this.updateButtonClickedSender.emit();
  }
}
