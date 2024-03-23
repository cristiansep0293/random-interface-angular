import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhraseTextComponent } from './phrase-text.component';

describe('PhraseTextComponent', () => {
  let component: PhraseTextComponent;
  let fixture: ComponentFixture<PhraseTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhraseTextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhraseTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
