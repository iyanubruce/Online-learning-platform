import HttpStatus from 'http-status-codes';

import ErrorHandler from './errorHandler';

export default class NotAuthenticatedError extends ErrorHandler {
  protected error_name = 'not authenticated';

  protected httpCode = HttpStatus.UNAUTHORIZED;

  public constructor(message: string = 'Request not authenticated', error: Error | undefined = undefined, data: any = null) {
    super(message, error, data);
    Error.captureStackTrace(this, this.constructor);
  }
}
