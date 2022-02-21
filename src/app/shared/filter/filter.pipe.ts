import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    };
    if (!searchText) {
      return items;
    };

    searchText = searchText.toLocaleLowerCase();
    return items.filter(it => {
      if(it.name){
        return it.name.toLocaleLowerCase().startsWith(searchText);
      }
      if(it.username){
        return it.username.toLocaleLowerCase().startsWith(searchText);
      }
    });
  }

}
