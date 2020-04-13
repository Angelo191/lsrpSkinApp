import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSkinListComponent } from './custom-skin-list.component';

describe('CustomSkinListComponent', () => {
  let component: CustomSkinListComponent;
  let fixture: ComponentFixture<CustomSkinListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomSkinListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomSkinListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
