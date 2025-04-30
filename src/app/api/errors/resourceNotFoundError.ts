import HttpStatus from 'http-status-codes';

import ErrorHandler from './errorHandler';

export default class ResourceNotFoundError extends ErrorHandler {
  protected error_name = 'not found';

  protected httpCode = HttpStatus.NOT_FOUND;

  public constructor(message: string = 'Resource not found', error: Error | undefined = undefined, data: any = null) {
    super(message, error, data);
    Error.captureStackTrace(this, this.constructor);
  }
}
