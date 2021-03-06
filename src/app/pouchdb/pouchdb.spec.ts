import { TestBed, inject } from '@angular/core/testing';

import { PouchDBService } from './pouchdb';


console.log('here---1');
describe('Test of pouchdb usage', ()=> {
  let storageService;

  beforeEach(()=> {
    TestBed.configureTestingModule({
      providers: [ PouchDBService ]
    });
  });

  beforeEach(inject([ PouchDBService ], (service) => {
    storageService = service;
  }));

  it('test put', (done)=> {
    expect(storageService).not.toBe(undefined);
    storageService.put({ _id: 'test' }).then(() => {
      console.log('Here');
      done();
    });
  });

});
