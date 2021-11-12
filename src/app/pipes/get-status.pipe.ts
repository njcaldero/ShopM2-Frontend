import { Pipe, PipeTransform } from '@angular/core';
import { Status } from '../enums/status';

@Pipe({
  name: 'getStatus'
})
export class GetStatusPipe implements PipeTransform {

  transform(idStatus: number): String {
    return Status[idStatus];
  }

}
