import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() { }

  public getImages() {
    return {
      onvioPracticeDetailBilling: {
        alt: 'Onvio Practice Detail Billing screen',
        image: './assets/images/onvio-documents-detail-billing.png'
      },
      // onvioPracticeBilling: {
      //   alt: 'Onvio Practice Billing screen',
      //   image: onvioPracticeBilling
      // },
      // onvioDocumentsClientDocs: {
      //   alt: 'Onvio Documents Client Documents screen',
      //   image: onvioDocumentsClientDocs
      // },
      // practiceCsDashboard: {
      //   alt: 'Practice CS dashboard screen',
      //   image: practiceCsDashboard
      // },
      // chegg: {
      //   alt: 'Chegg office',
      //   image: chegg
      // },
      // landing: {
      //   alt: 'Portrait with striped background',
      //   image: landing
      // },
      // portrait: {
      //   alt: 'Portrait of Jeff Buda',
      //   image: portrait
      // },
      // portraitTransparent: {
      //   alt: 'Portrait of Jeff Buda',
      //   image: portraitTransparent
      // },
      // dbeaver: {
      //   alt: 'DBeaver app',
      //   image: dbeaver
      // },
      // pascal: {
      //   alt: '',
      //   image: pascal
      // },
      // onvioDocuments: {
      //   alt: 'Onvio Documents software',
      //   image: onvioDocuments
      // },
      // onvioPractice: {
      //   alt: 'Onvio Practice Management software',
      //   image: onvioPractice
      // },
      // csa: {
      //   alt: 'Creative Solutions Accounting software',
      //   image: csa
      // },
      // softech: {
      //   alt: 'Softech company logo',
      //   image: softech
      // },
      reactVsCode: {
        alt: 'React in VS Code',
        image: './assets/images/react-vs-code.png'
      }

    }
  }
}
