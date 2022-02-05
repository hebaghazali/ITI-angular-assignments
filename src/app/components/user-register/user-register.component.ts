import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormArray,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { IUser } from 'src/app/ViewModels/iuser';
import { Observable, map, every } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { passwordMatch } from 'src/app/CustomValidations/PasswordMatch.Validator';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss'],
})
export class UserRegisterComponent implements OnInit {
  userRegisterForm: FormGroup;
  existUserEmails: string[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient
  ) {
    this.existUserEmails = [
      'hebbaghazaly@gmail.com',
      'hebbaghazaly@hotmail.com',
    ];

    this.userRegisterForm = formBuilder.group(
      {
        name: ['', [Validators.required, Validators.pattern('[A-Za-z]{2,}')]],
        email: [
          '',
          [
            Validators.required,
            // this.emailExistenceValidator(this.existUserEmails),
            this.asyncEmailExistenceValidator(),
          ],
        ],
        phoneNumbers: formBuilder.array([this.formBuilder.control('')]),
        address: formBuilder.group({
          city: ['', [Validators.required]],
          postalCode: ['', [Validators.required]],
          street: ['', [Validators.required]],
        }),
        password: ['', [Validators.required]],
        confirmPassword: ['', [Validators.required]],
        referral: [''],
        referralOther: [''],
      },
      { validators: passwordMatch }
    );
  }
  ngOnInit(): void {
    // this.userRegisterForm.patchValue({
    //   name: 'heba',
    //   email: 'hebbaghazaly@gmail.com',
    //   phoneNumber: '01111111111',
    // });
  }

  emailExistenceValidator(existEmails: string[]): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const emailValue: string = control.value;
      const validationError = { 'exist-email': { value: emailValue } };

      if (emailValue.length === 0 && control.untouched) return null;

      const foundEmail = existEmails.includes(emailValue);
      return foundEmail ? validationError : null;
      // return emailValue.includes('@') ? null : validationError;
    };
  }

  checkIfUsernameExists(email: string): Observable<any> {
    return this.httpClient
      .get<IUser>(`${environment.APIURL}/users?email=${email}`)
      .pipe(map((value) => value));
  }

  asyncEmailExistenceValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      const emailValue: string = control.value;
      const validationError = { 'exist-email': { value: emailValue } };

      this.checkIfUsernameExists(emailValue).subscribe((value) => {
        // console.log(value);
      });

      return this.checkIfUsernameExists(emailValue).pipe(
        map((res) => {
          if (emailValue.length === 0 && control.untouched) return null;
          return res ? validationError : null;
        })
      );
    };
  }

  addPhoneNumber(e: any) {
    this.phoneNumbers.push(this.formBuilder.control(''));
    e.target.style.display = 'none';
  }

  removePhoneNumber(e: any, i: number) {
    this.phoneNumbers.removeAt(i);
    e.target.style.display = 'none';

    e.target.parentElement.previousElementSibling.children[2].style.display =
      'inline';
  }

  updateReferralValidators() {
    if (this.referral?.value === 'Other') {
      this.userRegisterForm
        .get('referralOther')
        ?.addValidators([Validators.required]);
    } else {
      this.userRegisterForm.get('referralOther')?.clearValidators();
    }
    this.userRegisterForm.get('referralOther')?.updateValueAndValidity();
  }

  submit() {
    const userModel: IUser = <IUser>this.userRegisterForm.value;
    console.log(userModel);
  }

  get name() {
    return this.userRegisterForm.get('name');
  }

  get email() {
    return this.userRegisterForm.get('email');
  }

  get city() {
    return this.userRegisterForm.get('address.city');
  }

  get postalCode() {
    return this.userRegisterForm.get('address.postalCode');
  }

  get street() {
    return this.userRegisterForm.get('address.street');
  }

  get password() {
    return this.userRegisterForm.get('password');
  }

  get confirmPassword() {
    return this.userRegisterForm.get('confirmPassword');
  }

  get phoneNumbers() {
    return this.userRegisterForm.get('phoneNumbers') as FormArray;
  }

  get referral() {
    return this.userRegisterForm.get('referral');
  }
}
