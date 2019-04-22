import {Component, OnInit} from '@angular/core';
import {TagService} from "../../services/tag.service";

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {

  data: any;
  loading = true;
  selectedTag: any;


  constructor(private tagService: TagService) {
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.tagService.getAll().subscribe((data: any) => {
      this.data = data.data;
      this.loading = false;
    });
  }

  refreshTags(refresh: boolean) {
    if (refresh) {
      this.getData();
    }
    this.selectedTag = null;
  }

  selectTag(tag) {
    this.selectedTag = this.selectedTag === tag ? null : tag;
  }
}
