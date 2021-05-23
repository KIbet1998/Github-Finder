import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchGithubService {

  
username:string;
searchgithubservice:SearchGithubService;
submitUsername(){
  this.searchgithubservice.getUser(this.username);
}
constructor(searchgithubservice:SearchGithubService) {
  this.searchgithubservice= searchgithubservice
}
}
