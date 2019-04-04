import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import { User } from 'src/app/layouts/aside/User';
import { StorageService } from 'src/app/lib/storage.service';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {

  public form: FormGroup;
  public user: User;
  public passwordString: string;
  @Output() public update = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private _storageService: StorageService,
    private _userService: UserService,
    private router: Router
  ) {
    this.subscribeToUser();
  }

  ngOnInit() {
    this.form = this.fb.group({
      'email': new FormControl(this.user.email, [Validators.required, Validators.email]),
      'firstname': new FormControl(this.user.firstname, [Validators.required, Validators.pattern('[ a-zA-Zá-úÁ-ÚñÑ]+')]),
      'surname': new FormControl(this.user.surname, [Validators.required, Validators.pattern('[ a-zA-Zá-úÁ-ÚñÑ]+'), Validators.minLength(4)]),
      'birthdate': new FormControl(this.user.birthdate, Validators.required),
        'password': new FormControl('', [Validators.required, Validators.minLength(6)]),
        'password1': new FormControl('', [Validators.required])
      }, {validator: checkPasswordsValidator})
  }

  get email() {return this.form.get('email')}

  get firstname() {return this.form.get('firstname')}

  get surname() {return this.form.get('surname')}

  get birthdate() {return this.form.get('birthdate')}

  get password() {return this.form.get('password')}

  get password1() {return this.form.get('password1')}

  private subscribeToUser() {
    this._storageService.getUser$().subscribe(response => this.user = response);
  }

  public submit() {
    this.user.email = this.email.value;
    this.user.firstname = this.firstname.value;
    this.user.surname = this.surname.value;
    this.user.birthdate = this.birthdate.value;
    this.user.password = this.password.value;
    this._userService.update(this.user)
    this._storageService.emitUser(this.user);
    this.router.navigateByUrl('/');
  }

}


  export function checkPasswordsValidator(control: AbstractControl) {
    if(control.get('password').value !== control.get('password1').value){
      control.get('password1').setErrors({ notSame: true});
    }
  }
