import { Component, OnInit } from '@angular/core';
import { SpotifyService } from './../../services/spotify.service';
import { Artist } from './../../common/artist';

@Component({
    moduleId: module.id,
    selector: 'search',
    templateUrl: 'search.component.html'
})
export class SearchComponent implements OnInit {

    searchStr: string;
    artists: Artist[];

    constructor(private spotifyService: SpotifyService) { }

    ngOnInit() { }

    searchMusic() {

        this.spotifyService
            .searchMusic(this.searchStr)
            .subscribe(res => this.artists = res.artists.items)
    }
}