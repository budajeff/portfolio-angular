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
        image: './assets/images/onvio-practice-detail-billing.png'
      },
      onvioPracticeBilling: {
        alt: 'Onvio Practice Billing screen',
        image: 'onvio-practice-billing.png'
      },
      onvioDocumentsClientDocs: {
        alt: 'Onvio Documents Client Documents screen',
        image: './assets/images/onvio-documents-client-documents.png'
      },
      practiceCsDashboard: {
        alt: 'Practice CS dashboard screen',
        image: './assets/images/practice-cs-dashboard.jpeg'
      },
      chegg: {
        alt: 'Chegg office',
        image: './assets/images/chegg.jpeg'
      },
      landing: {
        alt: 'Portrait with striped background',
        image: './assets/images/landing-page.png'
      },
      portrait: {
        alt: 'Portrait of Jeff Buda',
        image: './assets/images/portrait.jpg'
      },
      portraitTransparent: {
        alt: 'Portrait of Jeff Buda',
        image: './assets/images/portrait-transparent.jpg'
      },
      dbeaver: {
        alt: 'DBeaver app',
        image: './assets/images/dbeaver.png'
      },
      pascal: {
        alt: 'Pascal programming book',
        image: './assets/images/turbo-pascal.jpg'
      },
      onvioDocuments: {
        alt: 'Onvio Documents software',
        image: './assets/images/onvio-documents.png'
      },
      onvioPractice: {
        alt: 'Onvio Practice Management software',
        image: './assets/images/onvio-practice.png'
      },
      csa: {
        alt: 'Creative Solutions Accounting software',
        image: './assets/images/csa.gif'
      },
      softech: {
        alt: 'Softech company logo',
        image: './assets/images/softech.jpg'
      },
      reactVsCode: {
        alt: 'React in VS Code',
        image: './assets/images/react-vs-code.png'
      },
      angularVsCode: {
        alt: 'Angular in VS Code',
        image: './assets/images/angular-vs-code.png'
      }
    }
  }
}
