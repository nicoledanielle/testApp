import { Component } from '@angular/core';

import { HTTP } from '@ionic-native/http/ngx'

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private http: HTTP) {}

  public ngOnInit() {
    this.http.get('https://community-open-weather-map.p.rapidapi.com/weather', {}, {}).then(_res => {
      console.log(_res);
    }).catch(err => {
      console.error(err);
    });
  }
}
