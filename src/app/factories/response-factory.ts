import { analyzeAndValidateNgModules } from "@angular/compiler";

export class ResponseFactory {
    public interpret(response: [any]): any {
        var mapped = [];

        response.forEach(item => {
            console.log(item);
            if (item.simpleResponse) {
                mapped.push(this.simpleResponse(item.simpleResponse));
            }
            if (item.basicCard) {
                mapped.push(this.basicCardResponse(item));
            }
        });

        return mapped;
    }

    simpleResponse(item: any): any {
        return {
            type: "simple",
            response: item.displayText
        };
    }

    basicCardResponse(item: any): any {
        return {
            type: "card",
            response: item.basicCard
        };
    }
}
