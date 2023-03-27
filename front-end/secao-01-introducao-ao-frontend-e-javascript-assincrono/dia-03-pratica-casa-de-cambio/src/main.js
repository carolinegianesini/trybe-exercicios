import Swal from 'sweetalert2';

const searchButton = document.querySelector('.search-btn');
const coinInput = document.querySelector('#input-moeda');
const coinTitle = document.querySelector('.coin-title');
const coinList = document.querySelector('.coins');

const renderCoins = (coins) => {
    coinList.innerHTML = '';
    const coinArray = Object.entries(coins);
    coinArray.forEach((coin) => {
        const [coinName, value] = coin;
        const li = document.createElement('li');
        li.innerHTML = `${coinName} - ${value}`;
        coinList.append(li);
    });
};

const handleSearch = () => {
    const moeda = coinInput.value;
    if (!moeda){
        Swal.fire({
            icon: 'error',
            title: 'Ops...',
            text: 'Você precisa passar uma moeda',
        });
        return;
    }
    const URL = `https://api.exchangerate.host/latest?base=${moeda}`;
    console.log(URL);

    fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            if(data.base !== moeda.toUpperCase()){
                throw new Error('Moeda não existente!');
            }
            renderCoins(data.rates);
        }).catch((e) => {
            Swal.fire({
                icon: 'error',
                title: 'Ops...',
                text: e.message,
            });
            coinTitle.innerHTML = '';
        });

    coinTitle.innerHTML = `Valores referentes a 1 ${moeda.toUpperCase()}`;   
};

searchButton.addEventListener('click', handleSearch);
