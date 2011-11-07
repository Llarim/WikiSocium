function CaseController() 
{
// [TODO] Этой переменной не будет, вместо нее будет обращение к динамическому объекту, синхронизирующемуся с серверу
	var temporaryCurrentStep = 0;    

	this.ShowProperStep = function () {
    	$(".step").addClass("isInvisible");
    	$("#"+"step_"+temporaryCurrentStep).toggleClass("isInvisible");
	}

	this.CheckPredicate = function(predicate) {
		if (predicate == "true") {
			return true;
		}
		var value = $("#" + predicate.wid).data("my_value");
		
		return eval(value + predicate.cond + predicate.value);
	}

	this.GetNextStep = function () {
		var nextInfo = caseNextPredicates[temporaryCurrentStep];
		var check = false;
		for (i in nextInfo) {
			for (j in nextInfo[i].predicates) {
				check = this.CheckPredicate(nextInfo[i].predicates[j]);
				if (check == false) {
					break;
				}
			}
			if (check == true) {
				temporaryCurrentStep = aliasMap[nextInfo[i].id];
				break;
			}
		}
		if (check != true) {
			temporaryCurrentStep += 1;
		}
		this.ShowProperStep();
	}
}

var caseController = new CaseController();

$(document).ready(function(){
    // Все шаги сейчас скрыты, нужно показать выбранный
	textFieldController = new TextFieldController();
	selectListController = new SelectListController();
	radioGroupController = new RadioGroupController();
	textFieldController.InitFields();
	selectListController.InitFields();
	radioGroupController.InitFields();
	caseController.ShowProperStep();    
});
