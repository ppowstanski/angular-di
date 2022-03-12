import {Directive, Host, OnInit} from '@angular/core';
import {MiningService} from '../../services';

@Directive({
  selector: '[appMining]',
  providers: []
})
export class MiningDirective implements OnInit{
  constructor(@Host() readonly miningService: MiningService) {
  }

  ngOnInit(): void {
    console.log('[MiningDirective:ngOnInit]');
    this.miningService.mine();
  }
}
