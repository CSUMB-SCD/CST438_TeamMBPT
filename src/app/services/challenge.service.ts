import { Injectable } from '@angular/core';

@Injectable()
export class ChallengeService {

  constructor() { }

  /*DB Connection here*/

  //Mock JSON for testing
  get_Challenges() {

    let challenges = [{
      'Name': 'Bubble sort',
      'Description': 'A slow race to the top'
    },
    {
      'Name': 'FizzBuzz',
      'Description': 'Practice division programatically'
    },
    {
      'Name': 'Hello World',
      'Description': 'Say hello to the world'
    },
    {
      'Name': 'BFS',
      'Description': 'Breadth-First Search'
    },
    {
      'Name': 'Fibonacci',
      'Description': 'First 100 Fibonacci values'
    }];

    return challenges;
  }
}
