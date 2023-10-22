function Validator(options) {
    function validate(inputElement, rule){
        var errorMessage = rule.test(inputElement.value);
        if (errorMessage) {
            errorMessage.innerText = errorMessage;
            inputElement.parentElement.classList.add('invalid');
        }
        else{
            errorMessage.innerText = '';
            inputElement.parentElement.classList.remove('invalid');
        }
    }

    var formElement = document.querySelector(options.form);


    if (formElement) {
        options.rules.forEach(function (rule) {

            var inputElement = formElement.querySelector(rule.selector);
            var errorMessage = inputElement.parentElement.querySelector('.form-message');
            if (inputElement) {
                inputElement.onblur = function () {
                    validate(inputElement, rule);

                    


                }
            }

        });

    }
}
// dinh nghia rules
// Nguyen tac cua cac rules:
// 1. Khi co loi => tra ra messae loi
// 2. Khi hợp lệ => không trả ra cái gì cả (underfined)
Validator.isEmail = function (selector) {

    return {
        selector: selector,
        test: function () {

        }
    };
}