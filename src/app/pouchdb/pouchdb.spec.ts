import { TestBed, inject } from '@angular/core/testing';

import { PouchDBService } from './pouchdb';


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

  it('test put', ()=> {
    expect(storageService).not.toBe(undefined);
  });

});