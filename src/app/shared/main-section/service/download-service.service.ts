import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DownloadServiceService {

  constructor(private http: HttpClient) { }

  // Função para baixar um PDF da URL fornecida
  downloadPdfFromUrl(pdfUrl: string): void {
    // Faz uma requisição HTTP para a URL do PDF e solicita a resposta como array de bytes (arraybuffer)
    this.http.get(pdfUrl, { responseType: 'arraybuffer' })
      .subscribe((data: ArrayBuffer) => {
        // Quando a resposta é recebida, chama a função para iniciar o download do arquivo
        this.downloadFile(data, 'My_CV.pdf');
      });
  }

  // Função para iniciar o download do arquivo
  private downloadFile(data: ArrayBuffer, filename: string): void {
    // Cria um Blob (Binary Large Object) a partir dos dados (array de bytes)
    const blob = new Blob([data], { type: 'application/pdf' });

    // Cria um link temporário para o arquivo e o adiciona ao DOM
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob); // Cria uma URL temporária para o Blob
    link.download = filename; // Define o nome do arquivo para download

    // Inicia o download simulando um clique no link
    link.click();

    // Remove o link temporário do DOM para evitar vazamentos de memória
    document.body.removeChild(link);
  }
}
