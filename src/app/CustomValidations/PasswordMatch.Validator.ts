import { ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';

export const passwordMatch: ValidatorFn = (
  formGroup: AbstractControl
): ValidationErrors | null => {
  const passwordControl = formGroup.get('password');
  const confirmPasswordControl = formGroup.get('confirmPassword');

  const validationError = {
    UnmatchedPassword: {
      password: passwordControl?.value,
      confirmPassword: confirmPasswordControl?.value,
    },
  };

  if (
    !passwordControl ||
    !confirmPasswordControl ||
    !passwordControl.value ||
    !confirmPasswordControl.value
  )
    return null;

  return passwordControl?.value === confirmPasswordControl?.value
    ? null
    : validationError;
};
