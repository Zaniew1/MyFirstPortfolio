let size = 10;
let orderElement = 1;

const init = () => {
    const btn = document.createElement('button');
    document.body.appendChild(btn);
    btn.style.width = `${size*30}px`;
    btn.style.height = `${size*10}px`; 
    btn.textContent = "Dodaj 10 li";
    const lista = document.createElement('ul');
    document.body.appendChild(lista);
    btn.addEventListener('click', createLiElements);
}
const createLiElements = () => {
    for(let i =0; i <10; i++){
    const element = document.createElement('li');
    document.querySelector('ul').appendChild(element);
    element.textContent = `Element nr ${orderElement++}`;
    element.style.fontSize = `${size++}px`
    }    
}

init()



