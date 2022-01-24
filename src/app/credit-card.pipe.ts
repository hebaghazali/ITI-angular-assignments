import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCard',
})
export class CreditCardPipe implements PipeTransform {
  transform(value: number): any {
    const newValue = value.toString().replace(/\s+/g, '');
    const replacedValue = newValue.replace(/(\d{4})/g, '$1-');
    return replacedValue.replace(/-$/, '');
  }
}
