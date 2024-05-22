import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/Services/photo.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  photos: any[] = [];
  constructor(private photo: PhotoService){}
  ngOnInit(): void {

    this.getAllPhotos();
  }
  getAllPhotos(){
    this.photo.getAllPhotos().subscribe((res:any)=>{
      this.photos = res
      console.log(this.photos);

      
    })
  }
}
