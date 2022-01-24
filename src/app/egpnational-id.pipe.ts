import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'EGPNationalID',
})
export class EGPNationalIDPipe implements PipeTransform {
  transform(value: number): Date {
    const ID = value.toString();

    const year = ID.slice(1, 3);
    const month = ID.slice(3, 5);
    const day = ID.slice(5, 7);

    return new Date(+`19${year}`, +month - 1, +day);
  }
}
