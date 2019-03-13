import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const responses = [
      {
        id: "hello",
        response: {
          "payload": {
            "google": {
              "expectUserResponse": true,
              "richResponse": {
                "items": [
                  {
                    "simpleResponse": {
                      "textToSpeech": "Howdy, this is GeekNum. I can tell you fun facts about almost any number, my favorite is 42. What number do you have in mind?",
                      "displayText": "Howdy! I can tell you fun facts about almost any number. What do you have in mind?"
                    }
                  }
                ]
              },
              "userStorage": "{\"data\":{}}"
            }
          },
          "outputContexts": [
            {
              "name": "/contexts/_actions_on_google",
              "lifespanCount": 99,
              "parameters": {
                "data": "{}"
              }
            }
          ]
        }
      },
      {
        id: "cool",
        response: {
          "payload": {
            "google": {
              "expectUserResponse": true,
              "richResponse": {
                "items": [
                  {
                    "basicCard": {
                      "title": "Title: this is a title",
                      "subtitle": "This is a subtitle",
                      "formattedText": "This is a basic card.  Text in a basic card can include \"quotes\" and\n        most other unicode characters including emoji 📱.  Basic cards also support\n        some markdown formatting like *emphasis* or _italics_, **strong** or\n        __bold__, and ***bold itallic*** or ___strong emphasis___ as well as other\n        things like line  \nbreaks",
                      "image": {
                        "url": "https://example.com/image.png",
                        "accessibilityText": "Image alternate text"
                      },
                      "buttons": [
                        {
                          "title": "This is a button",
                          "openUrlAction": {
                            "url": "https://assistant.google.com/"
                          }
                        }
                      ],
                      "imageDisplayOptions": "CROPPED"
                    }
                  }
                ]
              },
              "userStorage": "{\"data\":{}}"
            }
          },
          "outputContexts": [
            {
              "name": "/contexts/_actions_on_google",
              "lifespanCount": 99,
              "parameters": {
                "data": "{}"
              }
            }
          ]
        }
      },
      {
        id: "multi",
        response: {
          "payload": {
            "google": {
              "expectUserResponse": true,
              "richResponse": {
                "items": []
              },
              "userStorage": "{\"data\":{}}",
              "systemIntent": {
                "intent": "actions.intent.OPTION",
                "data": {
                  "@type": "type.googleapis.com/google.actions.v2.OptionValueSpec",
                  "listSelect": {
                    "title": "List Title",
                    "items": [
                      {
                        "optionInfo": {
                          "key": "SELECTION_KEY_ONE",
                          "synonyms": [
                            "synonym 1",
                            "synonym 2",
                            "synonym 3"
                          ]
                        },
                        "description": "This is a description of a list item.",
                        "image": {
                          "url": "IMG_URL_AOG.com",
                          "accessibilityText": "Image alternate text"
                        },
                        "title": "Title of First List Item"
                      },
                      {
                        "optionInfo": {
                          "key": "SELECTION_KEY_GOOGLE_HOME",
                          "synonyms": [
                            "Google Home Assistant",
                            "Assistant on the Google Home"
                          ]
                        },
                        "description": "Google Home is a voice-activated speaker powered by the Google Assistant.",
                        "image": {
                          "url": "IMG_URL_GOOGLE_HOME.com",
                          "accessibilityText": "Google Home"
                        },
                        "title": "Google Home"
                      },
                      {
                        "optionInfo": {
                          "key": "SELECTION_KEY_GOOGLE_PIXEL",
                          "synonyms": [
                            "Google Pixel XL",
                            "Pixel",
                            "Pixel XL"
                          ]
                        },
                        "description": "Pixel. Phone by Google.",
                        "image": {
                          "url": "IMG_URL_GOOGLE_PIXEL.com",
                          "accessibilityText": "Google Pixel"
                        },
                        "title": "Google Pixel"
                      }
                    ]
                  }
                }
              }
            }
          },
          "outputContexts": [
            {
              "name": "/contexts/_actions_on_google",
              "lifespanCount": 99,
              "parameters": {
                "data": "{}"
              }
            }
          ]
        }
      }
    ];
    return { responses };
  }
}
