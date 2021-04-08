import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root' 
}) 
export class AuthService {
  subject = new Subject<string>();
  subject2 = new Subject<boolean>();
  subject3 = new Subject<boolean>();
  isLogged:boolean;
  isAdmin:boolean=false;
  constructor() { }
  setUsername(username:string){ 
    this.subject.next(username)
  }
  getUsername():Observable<any>{ 
    return this.subject.asObservable()
  }
  setIsLogged(islogged:boolean){
    this.isLogged = islogged
    this.subject2.next(this.isLogged)
  }
  getIsLogged():Observable<boolean>{
    return this.subject2.asObservable()
  }
  setIsAdmin(isadmin:boolean){
    this.isAdmin =isadmin
  }
  getIsAdmin(){
    return this.isAdmin
  }
}
