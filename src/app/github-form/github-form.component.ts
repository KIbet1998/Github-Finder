import { Component, OnInit } from '@angular/core';
import {SearchGithubService  } from "../search-github.service";

@Component({
  selector: 'app-github-form',
  templateUrl: './github-form.component.html',
  styleUrls: ['./github-form.component.css']
})
export class GithubFormComponent implements OnInit {

  username:string;
  searchgithubservice:SearchGithubService;
  submitUsername(){
    this.searchgithubservice.getUser(this.username);
  }
  constructor(searchgithubservice:SearchGithubService) {
    this.searchgithubservice= searchgithubservice
  }

  ngOnInit(): void {
  }

}
