import { AuthService } from './../auth/auth.service';
import { ApiService } from './../auth/api.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const currentUser = this.auth.token;
    if (currentUser) {
      const authReq = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser}`,
        },
      });
      return next.handle(authReq);
    }
    return next.handle(request);
  }
}
