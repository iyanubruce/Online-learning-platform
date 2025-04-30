import HttpStatus from 'http-status-codes';

export default class ErrorHandler extends Error {
  protected error_code: string | undefined;

  protected error_name = 'internal error';

  protected internal: Error | undefined;

  protected status = 'error';

  protected httpCode = HttpStatus.INTERNAL_SERVER_ERROR;

  protected data: { [key: string]: any };

  public constructor(message: string, error: Error | undefined = undefined, data: { [key: string]: any }) {
    super(message);
    this.internal = error;
    this.data = data;
    this.status = 'error';
  }

  public getStatus() {
    return this.status;
  }

  public getCode() {
    return this.error_code;
  }

  public getInternalError() {
    return this.internal;
  }

  public getHttpCode() {
    return this.httpCode;
  }

  public getData() {
    return this.data;
  }

  public getName() {
    return this.error_name;
  }
}
