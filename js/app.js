'use.strict';

document.getElementById('create-building').addEventListener('click', () => {
    const adresse = document.getElementById('address').value; // Отримання адреси з інпуту
    const apartments = parseInt(document.getElementById('apartments').value); // Кількість квартир
   // console.log(apartments)
    if (adresse && apartments > 0) {
        const newHouse = new House(adresse); // Створення нового будинку
        newHouse.getApartments(apartments); // Ініціалізація квартир

        //Вивід інформації на сторінку
      newHouse.displayInfo();
    document.getElementById('address').value = '';
    document.getElementById('apartments').value = '';
    }
     createResidents(apartments)
});


function createResidents(apartments) {
   // console.log(apartments)
    document.getElementById("output").addEventListener('click', event => {
       // console.dir(event.target);
        const number = event.target;
       // const myApartment2 = new Apartment(number, roomsAmount, people);
        const output = document.getElementById('output');

        const formContainer  = document.querySelector('footer');
        const section = document.createElement('section');
        formContainer.appendChild(section)

        // Генеруємо інпут для кількості мешканців
        const countLabel = document.createElement('label');
        const rooms =  Math.floor(Math.random() * 4) + 1;
        countLabel.textContent = `Enter the number of residents for ${number.innerText}:... Rooms - ${rooms}`;
        const countInput = document.createElement('input');
        countInput.type = 'number';
        countInput.id = 'resident-count';
        countInput.min = 1;

        const countButton = document.createElement('button');
        countButton.textContent = 'Generate Residents';
        countButton.type = 'button';
        output.innerHTML = '';
      
        // Додаємо інпут і кнопку до контейнера
        section.appendChild(countLabel);
        section.appendChild(countInput);
        section.appendChild(countButton);

        countBtn(countButton, countInput, formContainer, number, rooms);
    })
}

function countBtn(countButton, countInput, formContainer, number, rooms) {
    // // Слухаємо подію натискання кнопки для створення інпутів мешканців
    countButton.addEventListener('click', () => {
        //console.log(countInput)
        const count = parseInt(countInput.value); // Отримуємо кількість мешканців
        console.log(count);
        if (!count || count <= 0) {
            alert("Please enter a valid number of residents.");
            return;
        }

        // Генеруємо інпути для введення мешканців
        const residentsContainer = document.createElement('div');
        residentsContainer.id = 'residents-container';
        residentsContainer.innerHTML = '<h3>Enter Resident Information:</h3>';

        for (let i = 0; i < count; i++) {
            const residentLabel = document.createElement('label');
            residentLabel.textContent = `Resident #${i + 1}:`;
            const residentInput = document.createElement('input');
            residentInput.type = 'text';
            residentInput.setAttribute("resident", "resident");

            residentInput.name = `resident-${i + 1}`;
            residentInput.placeholder = `Full Name of Resident #${i + 1}`;

            residentsContainer.appendChild(residentLabel);
            residentsContainer.appendChild(residentInput);
            residentsContainer.appendChild(document.createElement('br'));
            residentsContainer.appendChild(document.createElement('br'));
          
        }
        countInput.value = '';
        const countButton2 = document.createElement('button');
        countButton2.textContent = 'Settle Residents';
        countButton2.classList.add('btnCreateResidents')
        countButton2.type = 'button';
        residentsContainer.appendChild(countButton2)

        // Додаємо інпути до контейнера форми
        formContainer.appendChild(residentsContainer);
       
       
       createSetResidents (countButton2, number, rooms)
    });
}     



function createSetResidents(countButton2, number, roomsAmount) {
    const inputs = document.querySelectorAll('input[resident="resident"]');
    const people = []; // Массив для хранения данных о резидентах

    const btnNameResid = document.querySelector('.btnCreateResidents'); // Элемент кнопки
    console.log(btnNameResid);

    btnNameResid.addEventListener('click', () => {
        inputs.forEach(input => {
            const currentValuePerson = input.value; // Значение из поля ввода
            const age = Math.floor(Math.random() * (70 - 5 + 1)) + 5; // Случайный возраст от 5 до 70
            
            // Создаём объект для каждого человека
            const personObject = {
                name: currentValuePerson,
                age: age,
            };

            people.push(personObject); // Добавляем объект в массив
            input.value = '';
        });
   
        console.log(people); // Проверяем массив
           //  объекты в экземпляры класса Person
    const personInstances = people.map(personData => new Person(personData.name, personData.age));
    console.log(personInstances)
    personInstances.forEach(person => person.getInfo())
    const myApartment2 = new Apartment(number.innerText, roomsAmount, people);
    console.log(myApartment2)
  
    myApartment2.getInfo()
    console.log(myApartment2)


    });  

}

















