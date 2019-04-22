import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {TagService} from "../../services/tag.service";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Output() filteredData: EventEmitter<any> = new EventEmitter<any>();
  @Input() data;
  loading = true;

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {
    singleSelection: false,
    idField: 'id',
    textField: 'name',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 3,
    allowSearchFilter: true
  };

  constructor(private tagService: TagService) {
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.tagService.getAll().subscribe((data: any) => {
      this.dropdownList = data.data;
      this.loading = false;
    });
  }

  search() {
    const selectedTags = this.selectedItems.map((item) => {
      return item['name'];
    });
    const filtered  = this.data.filter( (item) => {
      const tags = item.tags.map((item) => {
        return item['name'];
      });
      return tags.some(r => selectedTags.includes(r));
    });

    this.filteredData.emit(filtered.length ? filtered : null);
  }
}
