import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryPreviewComponent } from './gallery-preview.component';

describe('GalleryPreviewComponent', () => {
  let component: GalleryPreviewComponent;
  let fixture: ComponentFixture<GalleryPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
