import { HttpClient } from "@angular/common/http";
import { TranslateLoader } from "@ngx-translate/core";
import { of } from "rxjs";
declare var require: any
export class TranslateApiLoader implements TranslateLoader {

  public getTranslation(): any {
    return of(require(`./translations/en.json`));
  }
}
