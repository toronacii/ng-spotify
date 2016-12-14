import { Component, OnInit } from '@angular/core';
import { SpotifyService } from './../../services/spotify.service';

@Component({
    moduleId: module.id,
    selector: 'search',
    templateUrl: 'search.component.html'
})
export class SearchComponent implements OnInit {

    searchStr: string;

    constructor(private spotifyService: SpotifyService) { }

    ngOnInit() { }

    searchMusic() {

        this.spotifyService
            .searchMusic(this.searchStr)
            .subscribe(console.log)
    }
}