import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class FileUploadService {
  private httpClient: any; //Testing

  constructor() { }

  postFile(fileToUpload: File): Observable<boolean> {
    const endpoint = 'your-destination-url';
    const formData: FormData = new FormData();
    formData.append('fileKey', fileToUpload, fileToUpload.name);
    return this.httpClient
      .post(endpoint, formData, { headers: 'yourHeadersConfig' })
      .map(() => { return true; })
      .catch((e) => this.handleError(e));
  }

  private handleError(e: any) {

  }
}
