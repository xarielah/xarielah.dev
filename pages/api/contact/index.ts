import { createHandler, Post, Body, ValidationPipe } from 'next-api-decorators';
import { ContactDto } from '../../../lib/dtos/contact.dto';
import { DBService } from '../../../lib/service/db.service';
import { NovuService } from '../../../lib/service/novu.service';

class ContactFormHandler {
  DB = new DBService();
  novu = new NovuService();

  @Post()
  async postContactForm(@Body(ValidationPipe) contactDto: ContactDto): Promise<void> {
    await this.novu.sendMail(contactDto);
    return await this.DB.saveContactForm(contactDto);
  }
}

export default createHandler(ContactFormHandler);
