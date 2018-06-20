import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(source: any[], field: any, value: any): any[] {

    if (!source) {
      return [];
    }
    if (!value || !field) {
      return source;
    }

    return source.filter(data => data[field].toLowerCase().includes(value.toLowerCase()));
  }

}
