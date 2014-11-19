(function () {
    'use strict';

    /*VARIABELEN*/

    var project, stage;

    project = document.querySelector('fieldset:nth-of-type(2)');
    stage = document.querySelector('fieldset:nth-of-type(3)');

    project.classList.add('is-invisible');
    stage.classList.add('is-invisible');

    /*ACTIE WANNEER PROJECT GEKOZEN*/

    document.querySelector('input[type="radio"]').onclick = function () {
        project.classList.add('is-visible');
        stage.classList.remove('is-visible');
    };

    /*ACTIE WANNEER STAGE GEKOZEN*/

    document.querySelector('input[type="radio"]:last-of-type').onclick = function () {
        stage.classList.add('is-visible');
        project.classList.remove('is-visible');
    };
    
}());