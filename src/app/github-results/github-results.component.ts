import { Component, OnInit } from '@angular/core';
import { User } from "../user";
import { SearchGithubService } from "../search-github.service";

@Component({
  selector: 'app-github-results',
  templateUrl: './github-results.component.html',
  styleUrls: ['./github-results.component.css']
})
export class GithubResultsComponent implements OnInit {
  user: User ;
  repoDetails = []
  searchgithubservice: SearchGithubService
  constructor(searchgithubservice: SearchGithubService) {
    this.searchgithubservice = searchgithubservice
  }

  

  ngOnInit(){
    this.user = this.searchgithubservice.user;
    this.repoDetails = this.searchgithubservice.repodata
  }

}
