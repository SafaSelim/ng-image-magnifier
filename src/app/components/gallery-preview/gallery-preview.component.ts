import { animate, style, transition, trigger, AnimationEvent } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faTimes, faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { Subject } from 'rxjs';

type Image = [{ url: string}];

@Component({
  selector: 'app-gallery-preview',
  templateUrl: './gallery-preview.component.html',
  styleUrls: ['./gallery-preview.component.scss'],
  animations: [
    trigger('animation', [
      transition('void => visible',[
        style({ transform: 'scale(0.5)' }),
        animate('150ms', style({ transform: 'scale(1)' })),
      ]),
      transition('visible => void',[
        style({ transform: 'scale(1)' }),
        animate('150ms', style({ transform: 'scale(0.5)' })),
      ]),
    ]),
    trigger('animation2', [
      transition(':leave',[
        style({ opacity: 1 }),
        animate('50ms',style({ opacity: 0.8 })),
      ]),
    ]),
  ],
})
export class GalleryPreviewComponent implements OnInit {
  @Input() images!: Image;
  @Input() showCount = false;
  @Input() imageClick$!: Subject<string>;

  faTimes = faTimes;
  faAngleRight = faAngleRight;
  faAngleLeft = faAngleLeft;

  previewImage = false;
  showMask = false;
  currentLightboxImage!: any;
  currentIndex!: number;
  controls = true;

  totalImageCount = 0;

  isZoomed = false;

  constructor() { }

  ngOnInit(): void {
    this.totalImageCount = this.images.length;
    this.currentLightboxImage = this.images[0].url ? this.images[0].url : "";

    this.imageClick$.subscribe(imgUrl => {
      const index = this.images.findIndex((el)=> el.url === imgUrl);
      this.currentLightboxImage = imgUrl;
      this.onPreviewImage(index);
    });
  }

  onPreviewImage(index: number): void {
    this.showMask = true;
    this.previewImage = true;
    this.currentIndex = index;
    this.currentLightboxImage = this.images[index];
  }

  onAnimationEnd(event: AnimationEvent) {
    if (event.toState === 'void') {
      this.showMask = false;
    }
  }

  onClosePreview() {
    this.previewImage = false;
    this.imageClick$.next("");
  }

  prevImage(): void {
    this.currentIndex = this.currentIndex - 1;
    if (this.currentIndex < 0) {
      this.currentIndex = this.images.length - 1;
    }
    this.currentLightboxImage = this.images[this.currentIndex];
  }

  nextImage(): void {
    this.currentIndex = this.currentIndex + 1;
    if (this.currentIndex > this.images.length - 1) {
      this.currentIndex = 0;
    }
    this.currentLightboxImage = this.images[this.currentIndex];
  }

  toggleZoom() {
    const img = document.getElementById("current-lightbox-image");
    this.isZoomed = !this.isZoomed;
    if(img !== null) {
      if (this.isZoomed) {
        img.style.width = img.clientWidth + 250 + "px";
        img.style.cursor = "zoom-out";
      } else {
        img.style.width = img.clientWidth - 250 + "px";
        img.style.cursor = "zoom-in";
      }
    }
  }

}
