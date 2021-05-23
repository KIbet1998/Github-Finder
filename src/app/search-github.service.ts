import { Injectable } from '@angular/core';
import { User } from "./user";
import { Repository } from "./repository";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SearchGithubService {

user: User
repository: Repository;
repodata :any= [];
newUserData: any = [];
constructor(private http: HttpClient) {
  this.user = new User("", 0, "", "", new Date)
  this.repository = new Repository("", "", new Date, "", "")
}
getUser(username: string) {
  interface ApiResponse {
    bio: string,
    public_repos: number,
    login: string,
    avatar_url: String,
    created_at: Date
  }


}}
