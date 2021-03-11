class FormValidator {
    constructor(form) {
        this.form = form;
        this.validated = false;

        this.patterns = {
            name: /^[a-zа-яё]+$/i,
            phone: /^\+7\(\d{3}\)\d{3}-\d{4}$/,
            email: /^[\w._-]+@\w+\.[a-z]{2,4}$/i
        };

        this.errors = {
            name: 'НЕ долно быть пустым и НЕ должно содержать что-то кроме букв!',
            phone: 'НЕ долно быть пустым и должно соответствовать шаблону +7(000)000-0000!',
            email: 'E-mail НЕ выглядит как mymail@mail.ru, или my.mail@mail.ru, или my-mail@mail.ru! Или поле пустое!'
        };

        this._validateForm();
    }

    _addErrorMsg(field) {
        let errorClass = "errorInvalidField";
        let error = `<div class=${errorClass}>${this.errors[field.name]}</div>`;

        if (field.parentNode.querySelector(`.${errorClass}`) == null) {
            field.parentNode.insertAdjacentHTML('beforeend', error);
        }
    }

    _deleteErrorMsg(field) {
        let errorClass = "errorInvalidField";
        let error = field.parentNode.querySelector(`.${errorClass}`);
        field.parentNode.removeChild(error);
        console.log("error deleted");
    }

    _validateField(field) {
        if (!this.patterns[field.name].test(field.value)) {
            field.classList.add('invalid');
            this._addErrorMsg(field);
        } else {
            if (field.classList.contains("invalid")) {
                field.classList.remove('invalid');
                this._deleteErrorMsg(field);
            }
            return true;
        }
    }

    _validateForm() {
        let fields = this.form.querySelectorAll("input");
        let validatedFields = 0;
        fields.forEach(field => {
            if (this._validateField(field)) {
                validatedFields++;
            }
            if (validatedFields == fields.length) {
                this.validated = true;
            }
        });
    }
}

const formForValidate = document.getElementById("validateForm");

formForValidate.addEventListener("submit", e => {
    const formValidator = new FormValidator(formForValidate);
    if (!formValidator.validated) {
        e.preventDefault();
    }
});