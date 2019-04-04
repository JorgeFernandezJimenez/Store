import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { User } from '../layouts/aside/User';

@Injectable()
export class StorageService {

  public storage = {
    isAnonymous: true,
    userMessage: '',
    user : null
  }

  private isAnonymous$: BehaviorSubject<boolean>;
  private userMessage$: Subject<string>;
  private user$: BehaviorSubject<User>;

  constructor() {
    this.isAnonymous$ = new BehaviorSubject<boolean>(
      this.storage.isAnonymous
    );
    this.userMessage$ = new Subject<string>();
    this.user$ = new BehaviorSubject<User>(
      this.storage.user
    );
  }

  public getIsAnonymous$(): Observable<boolean> {
    return this.isAnonymous$.asObservable();
  }

  public getUser$(): Observable<User> {
    return this.user$.asObservable();
  }

  public emitUser(user: User) {
    if(user) {
      this.storage.user = user;
      this.storage.isAnonymous = false;
    }else {
      this.storage.user = null;
      this.storage.isAnonymous = true;
    }
    this.user$.next(this.storage.user);
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
