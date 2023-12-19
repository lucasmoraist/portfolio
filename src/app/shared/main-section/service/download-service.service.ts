import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DownloadServiceService {

  constructor(private http: HttpClient) { }

  downloadPdfFromUrl(pdfUrl: string): void {
    this.http.get(pdfUrl, { responseType: 'arraybuffer' })
      .subscribe((data: ArrayBuffer) => {
        this.downloadFile(data, 'Currículo.pdf');
      });
  }

  private downloadFile(data: ArrayBuffer, filename: string): void {
    const blob = new Blob([data], { type: 'application/pdf' });

    // Cria um link temporário para o arquivo e o adiciona ao DOM
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = filename;

    // Inicia o download
    link.click();

    // Remove o link temporário
    document.body.removeChild(link);
  }
}
