import { Component } from '@angular/core';
import { Set } from '../models/set.model';
import { SetService } from '../set.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css'],
  providers: [SetService]
})
export class BrowseComponent {

  constructor(private setService: SetService) { }

  ngOnInit() {
  }

}
