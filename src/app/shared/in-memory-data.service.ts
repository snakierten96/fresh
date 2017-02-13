import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return {
      category: [
        { title: 'One' },
        { title: 'Two' },
        { title: 'Three' },
        { title: 'Four' },
        { title: 'Five' },
        { title: 'Six' },
        { title: 'Seven' },
        { title: 'Eight' },
        { title: 'Nine' },
        { title: 'Ten' },
        { title: 'Eleven' },
        { title: 'Twelve' }
      ]
    };
  }
}