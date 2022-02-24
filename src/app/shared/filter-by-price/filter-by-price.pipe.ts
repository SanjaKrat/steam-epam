import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByPrice'
})
export class FilterByPricePipe implements PipeTransform {

  transform(games: any[], price: string): any {
    if (!games) {
      return [];
    };
    if (!price) {
      return games;
    };
    return games.filter(it => {
      return +it.price <= +price;
    });
  }

}
