import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'joketellerAngular';

  // using the api service to get a random joke
  constructor(private apiService: ApiService) { }

  joke: any;

  ngOnInit() {
    this.getJoke();
  }

  async getJoke() {
    const joke = await this.apiService.getJoke();
    this.joke = joke;
  }
}
