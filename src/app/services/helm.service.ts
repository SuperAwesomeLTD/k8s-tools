import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HelmService {

  constructor(private http: HttpClient) { }

  public info(url: string, token: string) {
    const endpoint = '/tiller/v2/version/json';
    return this.http.get(url + endpoint, { headers: { token } });
  }

  public releases(url: string, token: string) {
    const endpoint = '/tiller/v2/releases/json';
    return this.http.get(url + endpoint, { headers: { token } });
  }

  public release(url: string, token: string, releaseName: string, jsonValues: boolean) {
    const json = jsonValues ? '?format_values_as_json=true' : '';
    const endpoint = `/tiller/v2/releases/${releaseName}/content/json${json}`;
    return this.http.get(url + endpoint, { headers: { token } });
  }

  public history(url: string, token: string, releaseName: string, limit: number) {
    const max = limit || 10;
    const endpoint = `/tiller/v2/releases/${releaseName}/json?max=${max}`;
    return this.http.get(url + endpoint, { headers: { token } });
  }
}
