import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'searchfilter'
})
export class SearchFilterPipe implements PipeTransform {
    // transform(value: any, args: string[]): any {
    //     console.log(value);
    //     console.log(args[0]);
    //     // let filter = args[0].toLowerCase(); 
    //     // return filter ? value.filter(movie=> movie.title.toLowerCase().indexOf(filter) != -1) : value; 
    //  } 
    transform(items: any, array:any, nameSearch: string){
      if(nameSearch == 'search' || nameSearch == undefined || nameSearch == '')
      {
        return items;
      }
      if (items && items.length && array.length){
            return array.filter(item =>{
                console.log(item);
                if (item.toLowerCase().indexOf(nameSearch) === -1){
                    console.log(item);
                    return false;
                }
                console.log(item);
                return items;
           })
        }
        else{
            return items;
        }
        
    }
}

// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({ 
//     name: 'searchfilter' 
// }) 
// export class SearchFilterPipe implements PipeTransform {

//     transform(value: any, args: string[]): any {

//        let filter = args[0].toLocaleLowerCase(); 
//        return filter ? value.filter(movie=> movie.title.toLocaleLowerCase().indexOf(filter) != -1) : value; 
//     } 
// }