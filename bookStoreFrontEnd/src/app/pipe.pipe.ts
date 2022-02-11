import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(value: any[], filterString: string, propName: string): any[] {

    const result: any = [];
    if (!value || filterString === ' ' || propName === ' ') {
      return value;
    }
    value.forEach((a: any) => {
      if (a[propName].trim().toLowerCase().includes(filterString.toLowerCase())) {
        result.push(a);
      }
    });
    return result;
  }
}

  //   if (value.length === 0 || filterString === '') {
  //     return value;

  //   }
  //   const books: any[][][] = [];
  //   for (const user of value) {
  //     if (user['name'] === filterString) {
  //       books.push(books);
  //     }
  //   }
  //   return books;
  // }

