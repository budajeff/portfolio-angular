import { Component, OnInit, ViewChild } from '@angular/core';

class ContactData {
  constructor(
    public name: string = '',
    public emailAddress: string = '',
    public comments: string = '') { }
}

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  public readonly contactData: ContactData = new ContactData();

  @ViewChild('contactForm')
  public contactForm: HTMLFormElement | undefined = undefined;

  public submitOk: boolean | undefined = undefined;

  constructor() { }

  ngOnInit(): void {
  }

  public async onSubmit() {
    if (!this.contactForm) {
      return;
    }
    const form = this.contactForm.nativeElement;
    const data = new FormData(form);
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });
    this.submitOk = response.ok;
    form.reset();
  }
}
