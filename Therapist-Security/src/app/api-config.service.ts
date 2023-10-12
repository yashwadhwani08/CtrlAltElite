import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiConfigService {
  private configUrl = 'assets/api-config.json';
  public apis: any;
  constructor(private http: HttpClient) { }
  setConfig() {
    this.apis = this.http.get(this.configUrl);
  }

  getConfig(): Observable<any> {
    return this.apis;
  }
}

@Injectable({
  providedIn: 'root',
})
export class ApiDataServices {
  private apiConf: any;
  constructor(
    private http: HttpClient,
    private apiConfigService: ApiConfigService
  ) {
    this.apiConf = this.apiConfigService.apis;
  }
  postRequest(data: any, api: string): Observable<any> {
    return this.apiConf.pipe(
      switchMap((config: any) => {
        const activeServer = config.activeServer;
        const apiServ = config.server['activeServer'];
        const postApi = config.api[api]['url'];
        const apiMethod = config.api[api]['method'];

        if (!postApi) {
          throw new Error(`invalid endpoint ${api}`);
        }

        const Url = `${apiServ}${postApi}`;
        if (apiMethod.toUpperCase() == 'POST') {
          const headers = new HttpHeaders({
            'Content-Type': 'application/json',
          });
          return this.http.post(Url, data, { headers, observe: 'response' });
        } else {
          let getUrl = Object.keys(data).length
            ? Url.replace('firstParam', data.firstParam).replace(
              'secondParam',
              data.secondParam
            )
            : Url;
          return this.http.get(getUrl, { observe: 'response' });
        }
      })
    );
  }
}
