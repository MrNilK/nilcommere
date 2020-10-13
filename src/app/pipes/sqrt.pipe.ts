import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sqrt',
})
export class SqrtPipe implements PipeTransform {
  transform(value) {
    return Math.sqrt(value); //here it will perform math operation
  }
}
//{{ 144 | sqrt}}

// {{ mobpart.name | uppercase }}
// {{ mobpart.name | lowercase }}
// {{ mobpart.name | json }}
// {{ mobpart.name | slice:3:5 }}
// {{ 0.25 | percent }}
// {{ mobpart.price | currency : 'INR' }}
// {{ date | date : 'short' }}
// {{ date | date : 'shortDate' }}
// {{ date | date : 'shortTime' }}