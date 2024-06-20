import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieMiniCardComponent } from './movie-mini-card.component';

describe('MovieMiniCardComponent', () => {
  let component: MovieMiniCardComponent;
  let fixture: ComponentFixture<MovieMiniCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieMiniCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovieMiniCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
