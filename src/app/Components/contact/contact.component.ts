import { Component } from '@angular/core';
import emailjs from 'emailjs-com';

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
  serviceId = 'service_uc7wftd';  // Asegúrate de usar tu Service ID de EmailJS
  templateId = 'template_7ldaive';  // Asegúrate de usar tu Template ID de EmailJS

  constructor() {}

  onSubmit() {
    const { name, email, subject, message } = this.contact;

    // Usando EmailJS para enviar el correo
    emailjs.send(this.serviceId, this.templateId, {
      from_name: name,
      from_email: email,
      subject: subject,
      message: message
    }, this.userId)
    .then(response => {
      console.log('Correo enviado exitosamente', response);
      alert('Correo enviado con éxito!');
      this.contact = { name: '', email: '', subject: '', message: '' };  // Limpiar el formulario
    })
    .catch(error => {
      console.error('Error al enviar el correo', error);
      alert('Hubo un error al enviar el correo. Intenta nuevamente.');
    });
  }
}
