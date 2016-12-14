import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

    constructor(private http: Http) { }

    searchMusic(str: string, type = 'artist') {

        let searchUrl = `https://api.spotify.com/v1/search?query=${ str }&offset=0&limit=20&type=${ type }&market=US`;

        return this.http.get(searchUrl)
            .map(res => res.json());
    }

    getArtist(id: string) {

        let artistUrl = `https://api.spotify.com/v1/artists/${ id }`;
        return this.http.get(artistUrl)
            .map(res => res.json());
    }

    getAlbums(artistId: string) {

        let albumsUrl = `https://api.spotify.com/v1/artists/${ artistId }/albums`;
        return this.http.get(albumsUrl)
            .map(res => res.json());
    }

    getAlbum(id: string) {

        let albumsUrl = `https://api.spotify.com/v1/albums/${ id }`;
        return this.http.get(albumsUrl)
            .map(res => res.json());
    }
}