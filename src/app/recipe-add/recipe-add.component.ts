import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.css']
})
export class RecipeAddComponent implements OnInit {
  @ViewChild('newIngredientName', {static: false}) newIngredientName: ElementRef;
  @ViewChild('newIngredientImage', {static: false}) newIngredientImage: ElementRef;
  @ViewChild('newIngredientStep', {static: false}) newStep: ElementRef;
  stepsList: string[] = [];
  nStep: number = 1;

  constructor() { }

  ngOnInit() {
  }

  addStep() {
    this.stepsList.push(this.newStep.nativeElement.value);
    this.nStep = this.stepsList.length + 1;
    this.newStep.nativeElement.value = '';
  }

  deleteStep(stepIndex: number) {
    this.stepsList.splice(stepIndex, 1);
    this.nStep = this.stepsList.length + 1;
  }
}
