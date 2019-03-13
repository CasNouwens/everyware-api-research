import { Component } from '@angular/core';
import { ChatbotService } from '../chatbot.service';
import { containerRefreshStart } from '@angular/core/src/render3';
import { ResponseFactory } from '../factories/response-factory';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private responseFactory;

  constructor(private chatbotService: ChatbotService) {
    this.responseFactory = new ResponseFactory();
    this.correspondence = [];
    this.suggestions = [];
  }
  public correspondence: any[];
  public suggestions: any[];

  public sendMessage = function (newMessage) {
    if (!newMessage) {
      return;
    }

    this.correspondence.push({
      type: "own",
      response: newMessage
    });

    this.chatbotService.sendMessage(newMessage).then(result => {
      this.suggestions = result.response.payload.google.richResponse.suggestions;
      var items = result.response.payload.google.richResponse.items;
      var replies = {
        type: "bot",
        responses: this.responseFactory.interpret(items)
      };
      this.correspondence.push(replies);
    });

  }
}
