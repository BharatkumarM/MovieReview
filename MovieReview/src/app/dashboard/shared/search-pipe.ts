import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'searchfilter'
})
export class SearchFilterPipe implements PipeTransform {
    transform(value: any, args: string[]): any {
        console.log(value);
        console.log(args[0]);
        let filter = args[0].toLowerCase(); 
        return filter ? value.filter(movie=> movie.title.toLowerCase().indexOf(filter) != -1) : value; 
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