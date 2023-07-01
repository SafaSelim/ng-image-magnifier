import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageGalleryComponent } from './pages/image-gallery/image-gallery.component';
import { MagnifyImageDirectiveModule } from './directives/magnify-image.module';
import { GalleryPreviewComponentModule } from './components/gallery-preview/gallery-preview.module';

@NgModule({
  declarations: [
    AppComponent,
    ImageGalleryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MagnifyImageDirectiveModule,
    GalleryPreviewComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
