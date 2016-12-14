import { SpotifyService } from './../../services/spotify.service';
import { Album } from './../../common/album';
import { Artist } from './../../common/artist';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'artist',
    templateUrl: 'artist.component.html',
    styleUrls: [ 'styles.css' ]
})
export class ArtistComponent implements OnInit {

    id: string;
    artist: Artist;
    albums: Album[]

    constructor(
        private spotifyService: SpotifyService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.route.params
            .map(param => param['id'])
            .subscribe(id => {

                this.spotifyService
                    .getArtist(id)
                    .subscribe(artist => this.artist = artist);

                this.spotifyService
                    .getAlbums(id)
                    .subscribe(albums => this.albums = albums.items);
            })
    }
}