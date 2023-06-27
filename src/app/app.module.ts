import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageGalleryComponent } from './pages/image-gallery/image-gallery.component';
import { MagnifyImageDirective } from './directives/magnify-image.directive';
import { GalleryPreviewComponent } from './components/gallery-preview/gallery-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageGalleryComponent,
    MagnifyImageDirective,
    GalleryPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
