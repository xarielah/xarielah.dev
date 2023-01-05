import { ContactDto } from '../dtos/contact.dto';
import { Novu } from '@novu/node';

export class NovuService {
  novu = new Novu(process.env.NOVU_KEY!);

  async sendMail(contactFormDto: ContactDto) {
    const { name, email, content } = contactFormDto;

    this.novu.trigger('contact', {
      to: {
        subscriberId: email,
        email: process.env.SG_TO ?? 'arielahr45@gmail.com',
      },
      payload: {
        name: name,
        contact_email: email,
        content: content,
      },
    });
  }
}
