import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the CalculateStatisticsPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'calculateStatistics',
})
export class CalculateStatisticsPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value, args?) {
 
    let minutes = Math.floor(value / 60);
    let hours = Math.floor(minutes / 60);
    let seconds = Math.floor(value % 60);
 
    return hours + " hrs, " + minutes + " mins, " + seconds + " secs";
 
  }
  
}
