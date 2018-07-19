import { Component } from '@angular/core';
import {GoogleMap, GoogleMapOptions, GoogleMaps, GoogleMapsEvent, Marker} from "@ionic-native/google-maps";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    map: GoogleMap;
    constructor() { }

    ionViewDidLoad() {
        this.loadMap();
    }

    loadMap() {

        let mapOptions: GoogleMapOptions = {
            camera: {
                target: {
                    lat: 43.0741904,
                    lng: -89.3809802
                },
                zoom: 18,
                tilt: 30
            }
        };

        this.map = GoogleMaps.create('map_canvas', mapOptions);

        let marker: Marker = this.map.addMarkerSync({
            title: 'Ionic',
            icon: 'blue',
            animation: 'DROP',
            position: {
                lat: 43.0741904,
                lng: -89.3809802
            }
        });
        // marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
        //     alert('clicked');
        // });
    }
}
