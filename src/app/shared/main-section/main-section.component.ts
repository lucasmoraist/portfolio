import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DownloadServiceService } from './service/download-service.service';


@Component({
  selector: 'main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.css']
})
export class MainSectionComponent {

  constructor(private downloadServiceService: DownloadServiceService) {}

  downloadPdf(): void {
    const pdfUrl = 'https://portfolio-web-lucas.s3.amazonaws.com/Curr%C3%ADculo.pdf';
    this.downloadServiceService.downloadPdfFromUrl(pdfUrl);
  }

}
