import HttpStatus from 'http-status-codes';

import ErrorHandler from './errorHandler';

export default class InternalServerError extends ErrorHandler {
  protected error_name = 'internal server error';

  protected httpCode = HttpStatus.INTERNAL_SERVER_ERROR;

  public constructor(message: string = 'Internal server error', error: Error | undefined = undefined, data: any = null) {
    super(message, error, data);
    Error.captureStackTrace(this, this.constructor);
  }
}
