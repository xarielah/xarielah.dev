import { Body, createHandler, Post, Res, ValidationPipe } from 'next-api-decorators';
import { CvDto } from '../../../lib/dtos/cv.dto';
import { DBService } from '../../../lib/service/db.service';
import { NovuService } from '../../../lib/service/novu.service';
import { autoInjectable } from 'tsyringe';
import type { NextApiResponse } from 'next';

@autoInjectable()
class CVFormHandler {
  constructor(private DB: DBService, private novuService: NovuService) {}

  @Post()
  async handleCvRequest(
    @Body(ValidationPipe) cvDto: CvDto,
    @Res() res: NextApiResponse
  ): Promise<void> {
    await this.DB.saveCvRequest(cvDto);
    await this.novuService.sendCvMail(cvDto);
    res.status(201).json({ message: `CV was sent to ${cvDto.email.toLowerCase()}` });
  }
}

export default createHandler(CVFormHandler);
