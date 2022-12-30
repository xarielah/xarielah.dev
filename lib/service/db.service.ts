import { InternalServerErrorException } from 'next-api-decorators';
import dbConnect from '../dbConnect';
import Contact from '../models/contact';
import { ContactDto } from '../dtos/contact.dto';
import sgMail from '@sendgrid/mail';

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

  async sendEmail(contactDto: ContactDto): Promise<void> {
    const { name, email, content } = contactDto;

    sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

    const msg: SGMessage = {
      to: process.env.SG_TO ?? 'xarielah@gmail.com',
      from: process.env.SG_VERIFIED ?? 'xarielah@gmail.com',
      subject: `New Message from: ${name}<${email}>`,
      html: `<div style="direction:ltr;text-align:center;"><h1>New Contact-Me message from <a href="https://xarielah.dev">xarielah.dev</a><h1/><h1>A message from <span style="color: #3ec">${name}</span>, < ${email} ></h1><br/><p style="font-size:1.2rem; font-weight:bold;">${content}</p></div>`,
    };

    try {
      await sgMail.send(msg);
    } catch (error: any) {
      throw new InternalServerErrorException(error.response.body.errors[0].message);
    }
  }
}
