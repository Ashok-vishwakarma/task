import { Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';


// import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.scss'],
  // providers: [MessageService],

})
export class FileuploadComponent implements OnChanges, OnInit {
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

  // @ViewChild('fileInput') fileInput!: ElementRef;


  img: any = []
  imageName: any = '';
  imageUrls: string[] = [];
  seleetcedFile: any = [];
  input: any;

  // openFiles() {
  //   this.fileInput.nativeElement.click();
  // }
  fileCountElement:any;


  delete(i: number) {
    this.imageUrls.splice(i, 1)
    this.seleetcedFile.splice(i, 1)

    console.log(this.imageUrls.length)
    //  this.input.value=this.imageUrls.length
    //  document.getElementById("fileCount")?.textContent = this.imageUrls.length.toString();
    this.fileCountElement = document.getElementById("fileCount");
    if (this.fileCountElement !== null) {
      this.fileCountElement.textContent = this.imageUrls.length.toString();
    }
    console.log(this.input.value)
    console.log(this.input)
  }


  previewImages(event: any) {
    this.imageUrls = []; // Clear any previous previews

    this.input = event.target;

    const files = this.input.files;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      if (file.type.startsWith('image/')) {
        const reader = new FileReader();

        reader.onload = (e: any) => {
          this.imageUrls.push(e.target.result); // Add the data URL to the array

          // console.log(this.imageUrls)
        };

        reader.readAsDataURL(file); // Read the image file as a data URL
        this.seleetcedFile.push(file)

        console.log(this.seleetcedFile)
      }
    }

  }


}
