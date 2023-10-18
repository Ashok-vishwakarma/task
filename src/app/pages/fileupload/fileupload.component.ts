import { Component, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.scss']
})
export class FileuploadComponent {

  @ViewChild('fileInput') fileInput!: ElementRef;


  img: any = []
  imageName: any = [];
  imageUrls: string[] = [];
  seleetcedFile: any = []
  // openFiles() {
  //   this.fileInput.nativeElement.click();
  // }


  delete(i: number) {
    this.imageUrls.splice(i, 1)
    this.seleetcedFile.splice(i, 1)
  }


  previewImages(event: any) {
    this.imageUrls = []; // Clear any previous previews

    const input = event.target;
    const files = input.files;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      if (file.type.startsWith('image/')) {
        const reader = new FileReader();

        reader.onload = (e: any) => {
          this.imageUrls.push(e.target.result); // Add the data URL to the array
        };

        reader.readAsDataURL(file); // Read the image file as a data URL
        this.seleetcedFile.push(file)
      }
    }
  }


}
