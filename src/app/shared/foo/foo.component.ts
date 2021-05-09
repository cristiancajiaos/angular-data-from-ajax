import { FooService } from './../services/foo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.scss']
})
export class FooComponent implements OnInit {

  registers: any[] = [];
  constructor(
    private foo: FooService
  ) { }

  ngOnInit() {
    this.foo.getData().subscribe(data => {
      this.registers = data.data;
    });
  }

}
