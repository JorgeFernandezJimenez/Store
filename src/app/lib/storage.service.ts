import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';

@Injectable()
export class StorageService {

  public storage = {
    isAnonymous: true,
    userMessage: ''
  }

  private isAnonymous$: BehaviorSubject<boolean>;
  private userMessage$: Subject<string>;

  constructor() {
    this.isAnonymous$ = new BehaviorSubject<boolean>(
      this.storage.isAnonymous
    );
    this.userMessage$ = new Subject<string>();
  }

  public getIsAnonymous$(): Observable<boolean> {
    return this.isAnonymous$.asObservable();
  }

  public emitIsAnonymous(login: boolean) {
    if(login) {
      this.storage.isAnonymous = false;
    }else {
      this.storage.isAnonymous = true;
    }
    this.isAnonymous$.next(this.storage.isAnonymous);
  }

  public getUserMessage$(): Observable<string> {
    return this.userMessage$.asObservable();
  }

  public emitUserMessage(message: string) {
    if(message) {
      this.storage.userMessage = message;
    }else {
      this.storage.userMessage = '';
    }
    this.userMessage$.next(this.storage.userMessage);
  }

}
