import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorting'
})
export class SortingPipe implements PipeTransform {

  transform(value: Array<string>, ...args: any[]): any {

    const SortField= args[0];
    value.sort((a : any, b:any)=>{
      if (a[SortField] < b[SortField]){
        return -1;

      }
      else if (a[SortField] > b[SortField]){
        return 1;
        
      }
      else{
        return 0;
      }
    });
    return value;
  }

}
