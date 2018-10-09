// Utils -----------------------------------

function getRandom(maxNumber) {
    var baseNumber = Math.floor((Math.random() * 1000) + 1);
    var intRandom =  baseNumber % maxNumber;

    if (intRandom < 10) {
        return '00' + intRandom;
    }

    if (intRandom < 100) {
        return '0' + intRandom;
    }

    return '' + intRandom;
}

// Utils ends here -----------------------------------


var appContainer = document.getElementById('pageContainer');

function renderer(domElement, component) {
    domElement.appendChild(component);
}

function buttonComponent(title, onClick) {
    var button = document.createElement('button');
    button.innerHTML = title;

    button.addEventListener ('click', function() {
        onClick();
    });

    return button;
}

function playerComponent(name, age) {
    var component = document.createElement('div');
    var playerId = getRandom(154);
    var sayHiButton = buttonComponent('Say Hi!', function() {
        alert('Hi Mates!');
    });

    var image = document.createElement('img');
    image.src = './static/images/trainers/' + playerId + '.gif';
    image.width = 100;
    image.style.cssText = [
        "margin-left: auto;",
        "margin-right: auto;",
    ].join(' ');

    component.style.cssText = [
        "border: 1px solid grey;",
        "height: 210px;",
        "width: 190px;",
        "text-align: center;",
        "padding: 5px 10px;",
        "margin: 5px 20px;",
        "display: flex;",
        "flex-direction: column;",
    ].join(' ');

    var content = document.createElement('span');
    content.innerHTML = name + ' : ' + age;
    content.style.cssText = [
        "margin-top: auto;",
    ].join(' ');

    component.appendChild(image);
    component.appendChild(content);
    component.appendChild(sayHiButton);

    return component;
}


function appComponent() {
    var component = document.createElement('div');
    var trainers = document.createElement('div');
    trainers.style.cssText = [
        "display: flex;",
        "align-items: center;",
        "flex-wrap: wrap;",
    ].join(' ');

    var addPlayerButton = buttonComponent('Add Player', function () {
        var player = playerComponent('Maxim', 18);

        trainers.appendChild(player);
    });

    component.appendChild(addPlayerButton);
    component.appendChild(trainers);

    return component;
}

renderer(
    appContainer,
    appComponent()
);
