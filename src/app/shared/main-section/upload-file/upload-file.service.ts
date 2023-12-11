
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  constructor(private http: HttpClient) { }

  download(url: string) {
    return this.http.get(url, {
      responseType: 'blob' as 'json'
      // reportProgress
      // content-length
    });
  }

  handleFile(res: any, fileName: string){
    console.log(res);

        const file = new Blob([res], {
          type: res.type
        });

        // IE
        const nav = window.navigator as any;
        if (window.navigator && nav.msSaveOrOpenBlob){
          nav.msSaveOrOpenBlob(file);
          return;
        }

        // Chrome
        const blob = window.URL.createObjectURL(file);

        const link = document.createElement('a');
        link.href = blob;
        link.download = fileName;

        /*
          window.URL.revokeObjectURL(blob);
          link.remove(); 
        */

        //link.click();
        
        // Firefox
        link.dispatchEvent(new MouseEvent('click',{
          bubbles: true,
          cancelable: true,
          view: window
        }))

        setTimeout(() => { // este timeout é apenas para o firefox
          window.URL.revokeObjectURL(blob);
          link.remove();
        }, 100)
  }
}
