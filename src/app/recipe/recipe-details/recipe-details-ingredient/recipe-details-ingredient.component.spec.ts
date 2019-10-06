import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDetailsIngredientComponent } from './recipe-details-ingredient.component';

describe('RecipeDetailsIngredientComponent', () => {
  let component: RecipeDetailsIngredientComponent;
  let fixture: ComponentFixture<RecipeDetailsIngredientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeDetailsIngredientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeDetailsIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
