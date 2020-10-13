import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textLimit'
})
export class TextLimitPipe implements PipeTransform {

  transform(value: string, args = 20): unknown { // ...args will access multiple records i.e. 8/10/
    console.log('args', args);
    return value.substr(0, args) + '...';
  }

}
