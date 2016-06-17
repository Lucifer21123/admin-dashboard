import { Component, OnInit } from '@angular/core';
import {Message} from "../../_models/message";
import {MessagesService} from "../../_services/messages.service"

@Component({
  moduleId: module.id,
  selector: '.notificationsBox',
  templateUrl: 'notification-box.component.html',
  styleUrls: ['notification-box.component.css']
})
export class NotificationBoxComponent implements OnInit {

  private messages: Message[];

  constructor() {}

  ngOnInit() {
  }

}
