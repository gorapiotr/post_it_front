import {Component, OnInit} from '@angular/core';
import {NoteService} from "../../services/note.service";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    loading = true;
    data: any;

    constructor(private noteService: NoteService) {
    }

    ngOnInit() {
        this.noteService.getAll().subscribe((item: any) => {
            this.data = item.data;
            this.loading = false;
        });
    }

}
