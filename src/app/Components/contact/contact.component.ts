import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  userId = 'J_oPmzOzmV48ybKDG';
  serviceId = 'service_uc7wftd';
  templateId = 'template_7ldaive';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  async onSubmit() {
    if (!isPlatformBrowser(this.platformId)) return;

    const emailjs = (await import('emailjs-com')).default;
    const { name, email, subject, message } = this.contact;

    emailjs.send(this.serviceId, this.templateId, {
      from_name: name,
      from_email: email,
      subject: subject,
      message: message
    }, this.userId)
    .then(response => {
      console.log('Correo enviado exitosamente', response);
      alert('Correo enviado con éxito!');
      this.contact = { name: '', email: '', subject: '', message: '' };
    })
    .catch(error => {
      console.error('Error al enviar el correo', error);
      alert('Hubo un error al enviar el correo. Intenta nuevamente.');
    });
  }
}
