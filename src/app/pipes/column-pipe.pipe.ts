import { Pipe, PipeTransform } from '@angular/core';
import { Column } from '../models/column.interface';

@Pipe({
  name: 'columnPipe',
})
export class ColumnPipePipe implements PipeTransform {
  transform(items: any[]): Column[] {
    let columns: Column[] = [];
    let keys = Object.keys(items[0]).filter((element) => element != 'id');
    keys.forEach((key) => {
      let newColumn = {} as Column;
      let field = key;
      if (items[0][key].constructor === {}.constructor) {
        let subField = '';
        let fieldKeys = Object.keys(items[0][key]).filter(
          (element) => element != 'id'
        );
        fieldKeys.forEach((element) => {
          subField += `${element}`;
        });
        newColumn.subField = subField;
      }
      if(items[0][key] instanceof Date){
        newColumn.pipe = 'date'
      }
      newColumn.field = field;
      newColumn.header = key;
      columns.push(newColumn);
    });
    return columns;
  }
}
