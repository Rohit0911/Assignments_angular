import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spchar',
  pure:false
})
export class SpcharPipe implements PipeTransform {
  newval: any;
  // let newval:any;
  transform(value: any): any {
    this.newval=value.replace(/[^a-zA-Z0-9]/g, '')
    return this.newval;
  }

}
