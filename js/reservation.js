let data = { citadin: { price: 100, gear: "manuelle", engine: ["electrique", "hybirde", "essence", "diesel"] }, compact: { price: 110, gear: "manuelle", engine: ["hybirde", "essence", "diesel"] }, berline: { price: 120, gear: "automatique", engine: ["hybirde", "essence", "diesel"] }, },
    tarif = { electrique: 0.05, hybirde: 0.09, essence: 0.14, diesel: 0.21 };

let query = str => document.querySelector(str);
let type, engine, gear, days, price;
query('#type').addEventListener('change', (event) => {
    type = event.target.value;
    price = data[type].price;
    if (type != '') {
        while (query('#engine').options.length > 1) query('#engine').options.remove(1);

        data[type].engine.forEach(element => {
            let option = document.createElement('option');
            option.setAttribute('value', element);
            option.innerText = element;
            query('#engine').appendChild(option);
        });
        query('#gear').options[1].innerText = data[type].gear;
    }
});


query('button').addEventListener('click', () => {
    price = data[type].price;
    type = query('#type').value;
    engine = query('#engine').value;
    gear = query('#gear').value;
    days = query('#days').value;
    if (type == '' || engine == '' || gear == '' || days == '') {
        alert('Please fill all');
        return;
    }

    if (data[type].gear == 'automatique') {
        tarif[engine] = tarif[engine] + 0.19;
    }
    price = ((price * tarif[engine]) + price) * days;

    query('p.price > span').innerText = price;

});