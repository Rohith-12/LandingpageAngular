import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "pip",
})
export class GetPipe implements PipeTransform {
  constructor() {}

  transform(value: any, ...args: any[]): any {
    if (value[0] == "A") {
      return "THIS IS A CLASS";
    } else {
      return "THIS IS B CLASS ";
    }
  }
}
