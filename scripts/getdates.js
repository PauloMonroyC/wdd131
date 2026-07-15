document.getElementById("currentyear").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent =
    `Last Modification: ${document.lastModified}`;

/*
const span = document.querySelector("span");
span.innerHTML = 'innerHTML supports <strong>HTML</strong> tags. The textContent property does not.';
span.style.textAlign = 'right';
span.setAttribute('class', 'active');
span.classList.add('active'); 


const paragraph = document.createElement('p');
span.appendChild(paragraph);
span.append(paragraph, 'Hello World Addition!');

span.removeChild(paragraph);
span.remove();
*/