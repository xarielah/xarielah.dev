import { createHandler, Post, Body, ValidationPipe } from 'next-api-decorators';
import { ContactDto } from '../../../lib/dtos/contact.dto';
import { DBService } from '../../../lib/service/db.service';

class ContactFormHandler {
  DB = new DBService();

  @Post()
  async postContactForm(@Body(ValidationPipe) contactDto: ContactDto): Promise<void> {
    await this.DB.sendEmail(contactDto);
    return await this.DB.saveContactForm(contactDto);
  }
}

export default createHandler(ContactFormHandler);
