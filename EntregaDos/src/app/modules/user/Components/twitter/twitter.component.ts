import { Component, OnInit } from '@angular/core';
//service
import { TweetsService } from 'src/app/services/tweets.service';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
})
export class TwitterComponent implements OnInit {
  public tweets = [];
  constructor(private _tweetsService: TweetsService) {}

  ngOnInit(): void {
    this.tweets = this._tweetsService.getTweets();
  }
}
