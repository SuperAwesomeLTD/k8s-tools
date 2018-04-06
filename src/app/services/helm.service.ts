import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HelmService {

  constructor(private http: HttpClient) { }

  public info(url: string, token: string) {
    const endpoint = '/tiller/v2/version/json';
    return this.http.get(url + endpoint, { headers: { token } });
  }
}
