import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Response<T> {
  data: T;
}

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, Response<T>> {
  async intercept(context: ExecutionContext, next: CallHandler): Promise<Observable<Response<T>>> {
    return next.handle().pipe(map(data => {
      if (data?._id) {
        return {
          firstname: data.firstname,
          lastname: data.lastname,
          email: data.email,
          id: data._id,
        };
      }
      if (data?.length && data[0]?._id) {
        return data.map(item => ({
          firstname: item.firstname,
          lastname: item.lastname,
          email: item.email,
          id: item._id,
        }));
      }
      return data;
    })) as any;
  }
}