import {Component} from '@angular/core';
import {GoogleMap, GoogleMapOptions, GoogleMaps, GoogleMapsEvent, ILatLng, Marker} from "@ionic-native/google-maps";
import {Platform} from "ionic-angular";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    map: GoogleMap;

    constructor(public platform: Platform) {
    }

    ionViewDidLoad() {
        this.platform.ready().then(() => {
            this.loadMap();
        });
    }

    loadMap() {
        const position: ILatLng = {
            lat: 50,
            lng: 10,
        };

        const mapOptions: GoogleMapOptions = {
            camera: {
                target: position,
                zoom: 18,
            }
        };

        this.map = GoogleMaps.create('map_canvas', mapOptions);


        this.map.addMarkerSync({
            title: 'Actual Position',
            icon: 'blue',
            position,
        });

        this.map.addMarkerSync({
            title: 'Right Anchor Position',
            icon: {
                url: './assets/imgs/arrow-green.png',
                // Anchor also accepts: [0, 0]
                anchor: {x: 0, y: 0},
            },
            position,

        });

        this.map.addMarkerSync({
            title: 'False Anchor Position',
            icon: {
                url: './assets/imgs/arrow-red.png',
            },
            position,
            // Will only accept number[]
            anchor: [0, 0],
        });
    }
}
