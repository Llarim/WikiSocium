//
// [TODO] Это все надо оформить в виде объекта StepsController, чтобы методы не "висели" в воздухе
//
YUI_config.groups.inputex.base = '../../inputex/build/';

// [TODO] Этой переменной не будет, вместо нее будет обращение к динамическому объекту, синхронизирующемуся с серверу
var temporaryCurrentStep = 0;
var groups = []; //Список групп полей (шагов) для формы (из них будем вытягивать данные)

function ShowPoperStep()
{
    if(temporaryCurrentStep <= NSTEPS)
    {
      $(".step").addClass("isInvisible");
      $("#"+"step_"+temporaryCurrentStep).toggleClass("isInvisible");
      if(temporaryCurrentStep == NSTEPS) temporaryCurrentStep = temporaryCurrentStep + 1;
    }
    
    if(temporaryCurrentStep >= NSTEPS) //Последний шаг
    {
      YUI().use('inputex', 'inputex-button', 'inputex-group', 'json-stringify', function(Y) {
         var destroyButton = new Y.inputEx.widget.Button({
         parentEl: 'stepsWrapper',
         id: 'submitForm',
         type: 'submit',
         value: 'Submit the form',
         onClick: function(){
            SaveFormData();
            }
         });
      });
    }
    
    //Набросок альтернативного варианта показа шагов (с багами, надо дописывать)
    /*YUI().use('inputex-string', 'inputex-form', 'inputex-datepicker', 'inputex-timeinterval', 'inputex-group', function(Y) {
      if(temporaryCurrentStep > 0)
      {
        groups[temporaryCurrentStep - 1].hide();
        groups[temporaryCurrentStep].show();
      }
    });*/
}

function SaveFormData()
{
    var formData = CollectFormData();
            
    $.ajax({
        url: window.location.pathname + '/submitForm'
        , type:'POST'
        , data:'step=' + temporaryCurrentStep + '&jsonData=' + $.toJSON(formData)
        , success: function(res) {}
    });    
}

function CollectFormData()
{
    var data = new Array();
    YUI().use('inputex', 'inputex-group', function(Y) 
    {
        for(var i = 0 ; i < groups.length ; i++)
        {
            data[i] = groups[i].getValue();
        }
    });
    return data;
}

// Обработчик нажатия кнопки следующего шага
function NextStep()
{
	var NSTEPS=requestedCaseController.NSTEPS;
    SaveFormData(); //Сохраняем данные при переходе к следующему шагу
    if(temporaryCurrentStep < NSTEPS)
    {
      temporaryCurrentStep = requestedCaseController.GetNextStepForStep(temporaryCurrentStep);
      ShowPoperStep();
    }
}

$(document).ready(function(){
    // Все шаги сейчас скрыты, нужно показать выбранный
	if (temporaryCurrentStep==undefined) temporaryCurrentStep=0;
    ShowPoperStep();    
});