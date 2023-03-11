/* eslint-disable @typescript-eslint/no-explicit-any -- the HttpError extra field is meant to be a flexible javascript object */

/**
 * Class extending Error class, providing additional fields
 */
export class HttpError extends Error {
  private _status: number;
  private _extra: any;

  constructor(status: number, message: string, extra?: any) {
    super(message);

    this._status = status;
    this._extra = extra || null;
  }

  get status() {
    return this._status;
  }

  get extra() {
    return this._extra;
  }
}
