import { createHandler, Post, Body, ValidationPipe } from 'next-api-decorators';
import { autoInjectable } from 'tsyringe';
import { ContactDto } from '../../../lib/dtos/contact.dto';
import { DBService } from '../../../lib/service/db.service';
import { NovuService } from '../../../lib/service/novu.service';

@autoInjectable()
class ContactFormHandler {
  constructor(private DB: DBService, private novuService: NovuService) {}

  @Post()
  async postContactForm(@Body(ValidationPipe) contactDto: ContactDto): Promise<void> {
    await this.novuService.sendContactMail(contactDto);
    return await this.DB.saveContactForm(contactDto);
  }
}

export default createHandler(ContactFormHandler);
