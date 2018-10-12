function buttonComponent({ title, onClick }) {
    var button = document.createElement('button');
    button.innerHTML = title;

    button.addEventListener('click', function() {
        onClick();
    });

    return button;
}

export default buttonComponent;
