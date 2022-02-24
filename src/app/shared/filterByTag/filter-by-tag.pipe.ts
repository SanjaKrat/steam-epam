import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByTag'
})
export class FilterByTagPipe implements PipeTransform {

  transform(games: any[], tags: any): any {
 
    if (!games) {
      return [];
    };
    if (!tags.action && !tags.adventure && !tags.indie) {
      return games;
    };

    let filtered: any = [];
    if (tags.indie) {
      filtered = [...filtered, ...games.filter(g => g.tag === 'indie')]
    }
    if (tags.adventure) {
      filtered = [...filtered, ...games.filter(g => g.tag === 'adventure')]
    }
    if (tags.action) {
      filtered = [...filtered, ...games.filter(g => g.tag === 'action')]
    }

    return filtered;

  }

}
