import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from './../../services/spotify.service';
import { Album } from './../../common/album';
import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'album',
    templateUrl: 'album.component.html'
})
export class AlbumComponent implements OnInit {

    id: string;
    album: Album

    constructor(
        private spotifyService: SpotifyService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.route.params
            .map(param => param['id'])
            .subscribe(id => {

                this.spotifyService
                    .getAlbum(id)
                    .subscribe(album => this.album = album);
            });

    }
}