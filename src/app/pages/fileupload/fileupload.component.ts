import { Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';


@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.scss']
})
export class FileuploadComponent implements OnChanges , OnInit {
  ngOnInit(): void {
    this.seleetcedFile
    this.imageName
    this.imageUrls
    console.log(this.imageName)
    console.log(this.imageUrls)
    console.log(this.seleetcedFile)

  }

  ngOnChanges() {
    this.seleetcedFile
    this.imageName
    this.imageUrls
    console.log(this.imageName)
    console.log(this.imageUrls)
    console.log(this.seleetcedFile)

  }

  @ViewChild('fileInput') fileInput!: ElementRef;


  img: any = []
  imageName: any = '';
  imageUrls: string[] = [];
  seleetcedFile: any = []
  // openFiles() {
  //   this.fileInput.nativeElement.click();
  // }


  delete(i: number) {
    this.imageUrls.splice(i, 1)
    this.seleetcedFile.splice(i, 1)

    console.log(this.imageName )
    console.log(this.imageUrls)
    console.log(this.seleetcedFile)
  
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
          
          console.log(this.imageUrls)
        };

        reader.readAsDataURL(file); // Read the image file as a data URL
        this.seleetcedFile.push(file)
      
        console.log(this.seleetcedFile)
      }
    }

  }


}
