const formAdd = document.querySelector('.form-add');
const coinValue = document.getElementById('coinvalue')
const getBtn = document.getElementById('get-btn');
const input = document.getElementById('current-price');
const coinCardAdd = document.getElementById('coin-card-add');
const piece = document.querySelector('#piece');
const postBtn = document.getElementById('post-btn');
const coinsSymbol = ["BTC", "ETC", "DOGE", "HOLO"]
const coinsUrl = []


window.onload = function () {
    coinsSymbol.forEach(val => {
        coinsUrl.push(`https://rest.coinapi.io/v1/exchangerate/${val}/USD?apikey=`)
    })
}
function axiosGet(id) {
    let inputVal;

    axios.get(coinsUrl[id], {
        headers: {
            'X-CoinAPI-Key': '567E3A3A-1D9D-44F9-886F-34ADC09929FC'
        }
    }).then(response => {
        inputVal = input.value = response.data.rate

    }).then(piece.addEventListener('submit', e => {
        let totalAmount = inputVal * piece.value;
        console.log(totalAmount);

    }))

}
function changeInput(value) {
    document.getElementById("price-2").value = parseFloat(value) * parseFloat(document.getElementById("current-price").value)
}

function cardAdd() {

    const card = `
    <div class="card px-5 my-3 mx-4" style="width: 20rem;">
    <img src="${document.getElementById('select').value}.png" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title" id="${document.getElementById('select').value}-title">${document.getElementById('select').value == 0 ? "BTC" : document.getElementById('select').value == 1 ? "ETC" : document.getElementById('select').value == 2 ? "DOGE" : "HOLO"}</h5>
        <label class="card-text">Coin adedi : ${piece.value}</label><br>
        <label class="card-text">${parseInt(document.getElementById("price-2").value)} ₺</label><br> 
        <div class="d-flex">
        <button type="button" class="btn btn-primary mx-2" data-bs-toggle="modal" data-bs-target="#exampleModal"
            data-bs-whatever="@mdo">Coin Al</button>
        <button class="btn btn-danger">Coin Sat</button>
        </div>       
    </div>
    </div>

    `;

    coinCardAdd.innerHTML += card;

    if (document.getElementById('select').value == 0) {

    }

}
