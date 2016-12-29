import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, Request, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Dxplor provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Dxplor {
  public response: Response;
  public request_option: RequestOptions;
  public request: Request;
  public request_method: RequestMethod
  public header: Headers;
  
  constructor(public http: Http) {
    console.log('Hello Dxplor Provider');
  }

  getGithubRepos(username){
    let repos = this.http.get('https://api.github.com/users/'+username+'/repos');
    return repos;
  }

  sendLoginData(phone: string, password: string){
    this.header = new Headers();
    this.header.append("Content-Type", 'application/x-www-form-urlencoded');
    /*this.header.append("Access-Control-Allow-Origin", "http://xml.travflex.com");
    this.header.append("Access-Control-Allow-Method", "GET, POST, OPTIONS");
    this.header.append("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
    this.header.append("Access-Control-Allow-Credentials", "true");*/
    let xmlreq = "<?xml version=\"1.0\" encoding=\"utf-8\" ?><Service_GetHotelDetail><AgentLogin><AgentId>DXMG</AgentId><LoginName>DXMG</LoginName><Password>DXMGT2016</Password></AgentLogin><GetHotelDetail_Request><HotelId>WSMA0608000030</HotelId></GetHotelDetail_Request></Service_GetHotelDetail>";
            
    /*this.request_option = new RequestOptions({
      method: RequestMethod.Post,
      url: "http://xml.travflex.com/11WS/ServicePHP/GetHotelDetails.php",
      headers: this.header,
      body: {requestXML:xmlreq},
    });*/
    
    let data = {phone: phone, password: password};
    let response = this.http.post("http://api.wellhos.id/auth/customer/login", data, {headers: this.header});
    //let response = this.http.request(new Request(this.request_option));
    return response;
  }

}
