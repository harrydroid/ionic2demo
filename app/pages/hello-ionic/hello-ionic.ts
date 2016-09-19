import { Component, OnChanges, SimpleChange, NgZone } from '@angular/core';
import {Messages} from '../../providers/messages/messages';
import {Observable} from 'rxjs/Observable';

@Component({
  templateUrl: 'build/pages/hello-ionic/hello-ionic.html',
  providers: [Messages]
})
export class HelloIonicPage implements OnChanges {

  messages: Observable<any>;

  constructor(
    private msgProvider: Messages
  ) {
  }

  ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
  }

  private pullChanges() {
    // this.messages = this.msgProvider.getUpdatedMessages().map(data => {
    //   return data.messages;
    // });
    this.msgProvider.getUpdatedMessages().subscribe(data => {
      console.log("Data : " + JSON.stringify(data));
    });

  }

  ngOnInit() {
    this.pullChanges();
  }
}
