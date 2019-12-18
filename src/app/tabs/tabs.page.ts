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
    console.log('test');
    this.http.get('https://us-central1-rocket-rounding-staging.cloudfunctions.net/test/helloworld', {}, {}).then(data => {
      console.log(data.status);
      console.log(data.data);
      console.log(data.headers);

    }).catch(err => {
      console.error(err.status);
      console.error(err.error);
      console.error(err.headers);
    });
  }
}
