const toggleButton = document.querySelector('#toggleButton');

const basicAmount = document.querySelector('#basicAmount');
const professionalAmount = document.querySelector('#professionalAmount');
const masterAmount = document.querySelector('#masterAmount');

const priceList = {
    monthly: {
        basic: 19.99,
        professional: 24.99,
        master: 39.99
    },
    annually: {
        basic: 199.99,
        professional: 249.99,
        master: 399.99
    }
};

toggleButton.addEventListener('change', () => {
    console.log(toggleButton.checked);
    if (toggleButton.checked) {
        basicAmount.textContent = priceList.annually.basic;
        professionalAmount.textContent = priceList.annually.professional;
        masterAmount.textContent = priceList.annually.master;
    }
    else {
        basicAmount.textContent = priceList.monthly.basic;
        professionalAmount.textContent = priceList.monthly.professional;
        masterAmount.textContent = priceList.monthly.master
    }
})