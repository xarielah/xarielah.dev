import { InternalServerErrorException } from 'next-api-decorators';
import dbConnect from '../dbConnect';
import Contact from '../models/contact';
import { ContactDto } from '../dtos/contact.dto';
import sgMail from '@sendgrid/mail';
import { CvDto } from '../dtos/cv.dto';
import CV from '../models/cv';

export type SGMessage = {
  to: string;
  from: string;
  subject: string;
  text?: string;
  html: string;
};

export class DBService {
  async saveContactForm(contactDto: ContactDto): Promise<void> {
    const { name, email, content } = contactDto;

    await dbConnect();

    try {
      const newContact = new Contact({ name, email, content });
      return await newContact.save();
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async saveCvRequest(cvDto: CvDto): Promise<void> {
    const { email } = cvDto;

    await dbConnect();

    try {
      const newCvRequest = new CV({ email, created_at: new Date(Date.now()) });
      await newCvRequest.save();
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}
