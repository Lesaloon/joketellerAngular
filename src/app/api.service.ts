import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  // using the joke.dev API to get a random joke
  async getJoke() : Promise<any> {
    return fetch('https://v2.jokeapi.dev/joke/Any?lang=fr&blacklistFlags=nsfw,explicit')
      .then(response => response.json())
      .then(data => {
        return data;
      });
  }
}
