import { AbstractControl } from "@angular/forms";

export class CustomValidators {
    static validationPhoneNumber(control: AbstractControl) {
        const field = control.value;
        if (field >= 4000000000) {
            return { field_invalid: true };
        }
        if (field > 9999999 && field < 3000000000) {
            return { field_invalid: true };
        }
        return null;
    }
}
