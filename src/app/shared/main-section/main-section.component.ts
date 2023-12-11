import { Component } from '@angular/core';
import { UploadFileService } from './upload-file/upload-file.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.css']
})
export class MainSectionComponent {

  constructor(private service: UploadFileService) { }

  downloadCV() {
    this.service.download(environment.API + "/downloadCV")
      .subscribe((res: any) => this.service.handleFile(res, 'Currículo.pdf'));
  }
}
