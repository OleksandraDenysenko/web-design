class Model {
    constructor() {}
    checkAnswers(result, rightAnswers, countAnswers) {
        if (countAnswers < 5) result.innerHTML = "Every question needs to be answered";
        else {
            if (rightAnswers < 4) result.innerHTML = "Your result is " + rightAnswers + "/6. Try again!";
            else result.innerHTML = "Your result is " + rightAnswers + "/6. Good job!";
        }
        result.style.display = "block";
    }
}

class View {
    constructor() {}

    usersAnswers() {
        let rightAnswers = 0, countAnswers = 0;
        var elements = document.getElementsByClassName("form-check-input");
        var numberanswer = document.getElementsByName("question5")[0].value;
        var result = document.getElementById("result");
        for (var i=0, len = elements.length; i<len; i++) {
            if (elements[i].checked) {
                countAnswers++;
                if (elements[i].id == "rightCheckBox") rightAnswers++;
            }
        }
        if (numberanswer == "123") {
            countAnswers++;
            rightAnswers++;
        }

        var myModel = new Model();
        myModel.checkAnswers(result, rightAnswers, countAnswers);
    }
}

class Controller {
    constructor(model, view) {
        this.model = model
        this.view = view
    }
}

const controller = new Controller(new Model(), new View());