import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { User } from '../User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  public user: User;
  @Output() public login = new EventEmitter();

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      'email': new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      'pass': new FormControl('', [
        Validators.required
      ])
    })
  }

  get email() {return this.form.get('email')}

  get pass() {return this.form.get('pass')}

  public submit() {
    this.user = new User(null, this.email.value, this.pass.value, '', '', null);
    this.login.emit(this.user);
  }

}
