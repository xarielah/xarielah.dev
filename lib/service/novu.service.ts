import { ContactDto } from '../dtos/contact.dto';
import { Novu } from '@novu/node';
import { CvDto } from '../dtos/cv.dto';
import moment from 'moment';

export class NovuService {
  novu = new Novu(process.env.NOVU_KEY!);

  async sendContactMail(contactFormDto: ContactDto) {
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

  async sendCvMail(cvDto: CvDto) {
    const { email } = cvDto;

    /**
     * First trigger is the mail to the client
     */
    await this.novu.trigger('cv', {
      to: {
        subscriberId: email,
        email: email,
      },
      payload: {
        date: moment(new Date(Date.now())).format('DD/MM/YYYY HH:mm'),
      },
    });

    /**
     * Second trigger is a mail to me.
     */
    await this.novu.trigger('cv-me', {
      to: {
        subscriberId: '@me',
        email: process.env.SG_TO ?? 'arielahr45@gmail.com',
      },
      payload: {
        requester_email: email,
        date: moment(new Date(Date.now())).format('DD/MM/YYYY HH:mm'),
      },
    });
  }
}
