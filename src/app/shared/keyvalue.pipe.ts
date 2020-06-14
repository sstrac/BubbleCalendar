import { PipeTransform, Pipe } from '@angular/core'

@Pipe({name: 'keys'})
export class KeyValuePipe implements PipeTransform {
  transform(object) : any {
    let keys = [];
    for (let key in object) {
      keys.push({key: key, value: object[key]});
    }
    return keys;
  }
}