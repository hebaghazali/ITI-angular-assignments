import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCard',
})
export class CreditCardPipe implements PipeTransform {
  transform(value: number): any {
    const replacedValue = value.toString().replace(/(\d{4})/g, '$1-');
    return replacedValue.replace(/-$/, '');
  }
}
