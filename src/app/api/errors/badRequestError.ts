import HttpStatus from 'http-status-codes';

import ErrorHandler from './errorHandler';

export default class BadRequestError extends ErrorHandler {
  protected error_name = 'bad request';

  protected httpCode = HttpStatus.BAD_REQUEST;

  public constructor(message: string = 'Request data is invalid', error: Error | undefined = undefined, data: any = null) {
    super(message, error, data);
    Error.captureStackTrace(this, this.constructor);
  }
}
