import { NgModule } from '@angular/core';
import { GalleryPreviewComponent } from './gallery-preview.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  declarations: [GalleryPreviewComponent],
  exports: [GalleryPreviewComponent],
})
export class GalleryPreviewComponentModule {}
