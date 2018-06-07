import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'searchfilter'
})
export class SearchFilterPipe implements PipeTransform {
    transform(items: any, array:any, nameSearch: string){
      if(nameSearch == undefined || nameSearch == '')
      {
        return items;
      }
      if(items && items.length && array.length){
            return items.filter(item =>{
                console.log(item);
                if (item.title.toLowerCase().indexOf(nameSearch) === -1){
                    console.log(item);
                    return false;
                }
                console.log(item);
                return true;
           })
        }
        else{
            return items;
        }
        
    }
}

