import { Injectable } from '@angular/core';
import * as PouchDB from 'pouchdb-browser';

@Injectable()
export class PouchDBService {

  pouchdb: any;

  constructor() {
    this.pouchdb = new PouchDB('test');
  }

  put(object: any): any {
    return this.pouchdb.put(object);
  }

}
