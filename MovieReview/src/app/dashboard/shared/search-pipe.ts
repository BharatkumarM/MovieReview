import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'searchfilter'
})
export class SearchFilterPipe implements PipeTransform {
    transform(items: any, nameSearch: string){
      if(nameSearch == undefined || nameSearch == '')
      {
        return items;
      }
      if(items && items.length){
            return items.filter(item =>{
                console.log(item);
                if (item.title.toLowerCase().indexOf(nameSearch.toLowerCase()) === -1){
                    return false;
                }
                return true;
           })
        }
        else{
            return items;
        }
        
    }
}

