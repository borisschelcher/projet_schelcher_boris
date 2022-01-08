import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'refactorPhoneNumber'
})
export class RefactorPhoneNumberPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
