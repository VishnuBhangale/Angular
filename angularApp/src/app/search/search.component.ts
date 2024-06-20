import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  wikiList: any[] = [];

  constructor(private _service: DemoService) { }

  ngOnInit(): void {
    // Initialize component
  }

  onBlur(event: any) {
    const searchText = event.target.value.trim();
    if (searchText) {
      this._service.getWikiSearch(searchText).subscribe(
        res=> {
          console.log('API Response:', res);
          this.wikiList = res.query.search;
        },
        (error: any) => {
          console.error('Error fetching search results:', error);
          this.wikiList = []; // Clear list or handle error state
        }
      );
    } else {
      this.wikiList = []; // Clear list if search term is empty
    }
  }
}