var ul = document.getElementById('possibleList');

let possibleVariable = [
    ['https://compyou.ru/img/500x375/1287/yzcx.jpg', 'Клавиатура', '990₽'],
    ['https://cdn.amd-heroes.jp/img/article/2019/03/xl/5b104ac3e2.jpg', 'AsRock A320', '4.910₽'],
    ['https://cdn.svyaznoy.ru/upload/iblock/d01/100023858061b0.jpg/resize/483x483/hq/', 'AMD RYZEN 5 1600', '8.000₽'],
    ['https://www.alltime.ru/obj/catalog/watch/suunto/img/big/CORE-ALL-BLACK.jpg', 'Наручные часы', '13.990₽'],
    ['https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MM6F3?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1632956535000', 'Салфетка Apple', '2.000₽'],
    ['https://lv3.pigugroup.eu/colours/585/657/5/5856575/371de4f430fee06c37bf1c2beeed75b5_original.jpg', 'Оперативная память', '5.000₽'],
];

    for (var i = 0; i < 3; i++) {

        var rand = Math.floor(Math.random() * possibleVariable.length);

        var li = document.createElement('li');
        li.classList.add('item');
        li.setAttribute('id', 'item');

        var img = document.createElement('img');
        img.src = possibleVariable[rand][0];
        img.classList.add('itemImg');

        var text = document.createElement('div');
        text.classList.add('text');

        var goods = document.createElement('p');
        goods.innerHTML = possibleVariable[rand][1];
        goods.classList.add('goods');

        var price = document.createElement('p');
        price.innerHTML = possibleVariable[rand][2];
        price.classList.add('price');

        text.appendChild(goods);
        text.appendChild(price);

        li.appendChild(img);
        li.appendChild(text);

        ul.appendChild(li);
};

$(document).ready(function(){

    let span = document.querySelector('.disabled');

    $('#possibleList').sortable({connectWith:'#selectedList'});    
    $('#selectedList').sortable({
        connectWith:'#possibleList',
        cancel: '.disabled'
    });

});