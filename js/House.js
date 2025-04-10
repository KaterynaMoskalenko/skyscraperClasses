'use.stricrt';

class House {
    constructor(adresse, apartments) {
        this.adresse = adresse;
        this.apartments = apartments || new Map() ;
    }
  
    getApartments(numberOfApartments) {
        // added 150 apartments
        for (let i = 1; i <= numberOfApartments; i++) {
           this.apartments.set(i, new Set()); // i _ N apartment Set - residents every apartm.
        }
     }

     displayInfo() {
        const output = document.getElementById('output');
        output.innerHTML = '';
        const servicInfo = document.querySelector('.servicInfo');
        servicInfo.innerHTML = '';
        
        const div = document.createElement('div');
        div.textContent = `Adresse House is:  ${this.adresse}`;
        servicInfo.appendChild(div);

        this.apartments.forEach((_, apartmentNumber) => {
            const apartmDiv = document.createElement('div');
            apartmDiv.setAttribute('data-id',apartmentNumber )
            apartmDiv.textContent = `Apartment #${apartmentNumber}`;
            apartmDiv.classList.add('apartment');
          
            output.appendChild(apartmDiv);
        });

     }
}





