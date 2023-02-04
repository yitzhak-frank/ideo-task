import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appSorter]',
  exportAs: 'sorter'
})
export class SorterDirective {

    @Input('data') data: any[] = null as any;

    public up: boolean = false;
    public field: string = null as any;

    constructor() { }

    public sort(field: string) {
        if(this.field == field)
          this.up = !this.up;
        else this.field = field;

        this.data?.sort(({[field]: a}, {[field]: b}) => {
          if(field == 'Date') {
            a = new Date(a);
            b = new Date(b);
          }
          return (a > b) ? (this.up ? 1 : -1) : (b > a) ? (this.up ? -1 : 1) : 0;
        });
    }

    public style(field: string) {
      const active = field == this.field;
      const styles = {
        'font-size.px': 12,
        margin: '0 3px',
        transition: '.3s',
        opacity: active ? 1 : .3,
        transform: this.up ? 'rotate(180deg)' : 'none'
      };
      return styles;
    }
}
