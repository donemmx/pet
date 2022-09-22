import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import {
  concatMap,
  delay,
  Observable,
  of,
  retryWhen,
  throwError,
  mergeMap,
  catchError,
} from 'rxjs';

export const retryCount = 3;
export const retryWaitMilliSeconds = 1000;

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      retryWhen((error) =>
        error.pipe(
          concatMap((error, count) => {
            if (count <= retryCount && error.status >= 500) {
              return of(error);
            }
            return throwError(error);
          }),
          delay(retryWaitMilliSeconds)
        )
      ),
      catchError((error) => {
        console.log(error);
        return throwError(error);
      })
    );
  }
}
