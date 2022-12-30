import { NextApiResponse } from 'next';
import { ApiErrorCodes } from './types/api-error-codes.type';
import { ApiBasicException } from './types/api-exception-responses.type';

export class AppException extends Error {
  constructor(private res: NextApiResponse) {
    super();
  }

  public init(code: ApiErrorCodes, message: string): void {
    const response: ApiBasicException = {
      statusCode: code,
      message: message,
    };

    this.res.status(code).json(response);
  }
}

export class NotFoundException extends AppException {
  constructor(res: NextApiResponse, message?: string) {
    super(res);

    this.init(ApiErrorCodes.NOT_FOUND, message || 'Resource was not found.');
  }
}

export class MethodNotAllowed extends AppException {
  constructor(res: NextApiResponse, message?: string) {
    super(res);

    this.init(ApiErrorCodes.NOT_ALLOWED, message || 'Method is not allowed.');
  }
}

export class BadRequestException extends AppException {
  constructor(res: NextApiResponse, message?: string) {
    super(res);

    this.init(ApiErrorCodes.BAD_REQUEST, message || 'Bad request');
  }
}

export class UnauthorizedException extends AppException {
  constructor(res: NextApiResponse, message?: string) {
    super(res);

    this.init(ApiErrorCodes.UNAUTHORIZED, message || 'Unauthorized.');
  }
}
