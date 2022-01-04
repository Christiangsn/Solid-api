export class AddGroupController {
    constructor (
        private validation: Validation,

    ){}

    add () {
        this.validation.validation()
    }
}

interface Validation {
    validation: () => void

}

export class RequiredFieldValidation implements Validation {
    validation (): void {

    }
}

export class PhoneValidation implements Validation {
    validation (): void {

    }
}

export class AddGroupCompositeVlidation implements Validation {
    constructor (
        private requiredFieldValidation: RequiredFieldValidation,
        private phoneValidation: PhoneValidation
    ){ }

    validation (): void {

    }
}

//Composition Root
const requiredFieldValidation =  new RequiredFieldValidation
const phoneValidation = new  PhoneValidation
const addGroupCompositeVlidation = new AddGroupCompositeVlidation(requiredFieldValidation,phoneValidation)
const controller = new AddGroupController(addGroupCompositeVlidation);