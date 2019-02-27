class item {
    constructor(name, male, lining, price) {
        this.name = name;
        this.male = male;
        this.lining = lining;
        this.price = price;
    }
}

class order {
    constructor(item, parametrs, price) {
        this.item = item;
        this.parametrs = parametrs;
        this.price = price;
    }
}

var items = [
    new item('Пальто утепленное', false, false, 13000),
    new item('Пальто демисезонное', false, false, 10000),
    new item('Плащ', false, false, 9000),
    new item('Куртка утепленная', false, false, 23000),
    new item('Куртка', false, false, 8000),
    new item('Жакет', false, false, 7000),
    new item('Сарафан', false, false, 5000),
    new item('Платье', false, false, 6000),
    new item('Платье вечернее', false, false, 10000),
    new item('Жилет', false, false, 4000),
    new item('Блуза', false, false, 5000),
    new item('Топ', false, false, 2500),
    new item('Корсет', false, false, 5000),
    new item('Трикотажный джемпер', false, false, 3000),
    new item('Трикотажная футболка', false, false, 2500),
    new item('Трикотажный топ', false, false, 2500),
    new item('Трикотажное платье', false, false, 4500),
    new item('Юбка', false, false, 3500),
    new item('Нижняя юбка', false, false, 2000),
    new item('Брюки', false, false, 4000),
    new item('Шорты', false, false, 3500),
    new item('Пальто утепленное', false, true, 14000),
    new item('Пальто демисезонное', false, true, 24000),
    new item('Плащ', false, true, 11000),
    new item('Куртка утепленная', false, true, 14000),
    new item('Куртка', false, true, 10000),
    new item('Жакет', false, true, 8000),
    new item('Сарафан', false, true, 6000),
    new item('Платье', false, true, 7000),
    new item('Платье вечернее', false, true, 12000),
    new item('Жилет', false, true, 5000),
    new item('Топ', false, true, 3000),
    new item('Корсет', false, true, 6000),
    new item('Юбка', false, true, 4500),
    new item('Брюки', false, true, 5000),
    new item('Шорты', false, true, 4000),
    new item('Пальто утепленное', true, false, 13000),
    new item('Пальто демисезонное', true, false, 11000),
    new item('Плащ', true, false, 10000),
    new item('Куртка утепленная', true, false, 12000),
    new item('Куртка', true, false, 9000),
    new item('Пиджак классика', true, false, 10000),
    new item('Смокинг', true, false, 14000),
    new item('Фрак', true, false, 17000),
    new item('Китель', true, false, 10000),
    new item('Жилет', true, false, 4500),
    new item('Сорочка классика', true, false, 30000),
    new item('Сорочка фрачная', true, false, 3500),
    new item('Манишка', true, false, 2000),
    new item('Трикотажный джемпер', true, false, 2500),
    new item('Трикотажная футболка', true, false, 20000),
    new item('Брюки', true, false, 6000),
    new item('Брюки с лампасами', true, false, 6000),
    new item('Шорты', true, false, 5000),
    new item('Килт', true, false, 4500),
    new item('Шарф, платок', true, false, 1000),
    new item('Пояс, ремень', true, false, 1000),
    new item('Пальто утепленное', true, true, 14000),
    new item('Пальто демисезонное', true, true, 12000),
    new item('Плащ', true, true, 11000),
    new item('Куртка утепленная', true, true, 13000),
    new item('Куртка', true, true, 10000),
    new item('Пиджак классика', true, true, 11000),
    new item('Смокинг', true, true, 15000),
    new item('Фрак', true, true, 18000),
    new item('Китель', true, true, 11000),
    new item('Жилет', true, true, 5000),
    new item('Брюки', true, true, 7000),
    new item('Брюки с лампасами', true, true, 7000),
    new item('Шорты', true, true, 6000),
    new item('Галстук', true, true, 1500),
    new item('Галстук «бабочка»', true, true, 1000),
    new item('Камер бант', true, true, 2000)
];

var orders = [];

function filtr() {
    var male = document.getElementsByName('male')[0].checked;
    var lining = document.getElementsByName('lining')[0].checked;
    var list = document.getElementById('item');
    list.options.length = 1;
    list.options[0].selected = true;
    for (let i = 0; i < items.length; i++) {
        const element = items[i];
        if (element.male == male & element.lining == lining) {
            var NewOption = new Option(element.name, i);
            list.appendChild(NewOption);
        }
    }
}

function getPrice() {
    var item = document.getElementById('item').value;

    var sketch = document.getElementsByName('sketch');
    var lecal = document.getElementsByName('lecal');
    var records = document.getElementsByName('records');
    var other = document.getElementsByName('other');

    var sketchQ = document.getElementsByName('sketchQ');
    var lecalQ = document.getElementsByName('lecalQ');
    var recordsQ = document.getElementsByName('recordsQ');
    var otherQ = document.getElementsByName('otherQ');

    var price = 0;
    var lecalPrice = 0;

    if (item == "") {
        document.getElementById('price').innerHTML = "";
        return;
    }

    if (sketch[0].checked) price += Number(5000 * Number(sketchQ[0].value));
    if (sketch[1].checked) price += Number(3000 * Number(sketchQ[1].value))

    if (lecal[0].checked) {
        lecalPrice = items[item].price;
        price += lecalPrice * Number(lecalQ[0].value);
        if (lecal[1].checked) price += Number(1500 * Number(lecalQ[1].value));
        if (lecal[2].checked) price += (lecalPrice / 5) * Number(lecalQ[2].value);
        if (other[0].checked) price += Number(1000 * Number(otherQ[4].value));
        if (other[1].checked) price += Number(300 * Number(otherQ[4].value));
    }

    if (records[0].checked) price += Number(2600 * Number(recordsQ[0].value));
    if (records[1].checked) price += Number(1300 * Number(recordsQ[1].value));
    if (records[2].checked) price += Number(2000 * Number(recordsQ[2].value));
    if (records[3].checked) price += Number(1300 * Number(recordsQ[3].value));
    if (records[4].checked) price += Number(700 * Number(recordsQ[4].value));

    if (other[2].checked) price += Number(2000 * Number(otherQ[2].value));
    if (other[3].checked) price += (items[item].price / 2) * Number(otherQ[3].value);
    if (other[4].checked) price += Number(1300 * Number(otherQ[4].value));
    if (other[5].checked) price += Number(2000 * Number(otherQ[5].value));
    if (other[6].checked) price += Number(3400 * Number(otherQ[6].value));
    document.getElementById('price').innerHTML = price;
    return (price);
}

function reset() {
    var sketch = document.getElementsByName('sketch');
    var lecal = document.getElementsByName('lecal');
    var records = document.getElementsByName('records');
    var other = document.getElementsByName('other');

    var sketchQ = document.getElementsByName('sketchQ');
    var lecalQ = document.getElementsByName('lecalQ');
    var recordsQ = document.getElementsByName('recordsQ');
    var otherQ = document.getElementsByName('otherQ');

    var checkboxes = Array.from(sketch).concat(Array.from(lecal), Array.from(records), Array.from(other));
    var numbers = Array.from(sketchQ).concat(Array.from(lecalQ), Array.from(recordsQ), Array.from(otherQ));

    for (let i = 0; i < checkboxes.length; i++) {
        const element = checkboxes[i];
        element.checked = false;
    }

    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        element.value = 1;
    }

    document.getElementsByName('male')[0].checked = true;
    document.getElementsByName('lining')[0].checked = true;
    document.getElementById('name1').checked = true;

    filtr();
    getPrice();
}

function remember() {
    var item = document.getElementById('item').value;

    var sketch = document.getElementsByName('sketch');
    var lecal = document.getElementsByName('lecal');
    var records = document.getElementsByName('records');
    var other = document.getElementsByName('other');

    var sketchQ = document.getElementsByName('sketchQ');
    var lecalQ = document.getElementsByName('lecalQ');
    var recordsQ = document.getElementsByName('recordsQ');
    var otherQ = document.getElementsByName('otherQ');

    var parametrs = []

    if (sketch[0].checked) parametrs = parametrs.concat('Эскиз модели: ' + sketchQ[0].value);
    if (sketch[1].checked) parametrs = parametrs.concat('Оцифровка изображения: ' + sketchQ[1].value);

    if (lecal[0].checked) {
        parametrs = parametrs.concat('Разработка основы конструкции на модель: ' + lecalQ[0].value);
        if (lecal[1].checked) parametrs = parametrs.concat('Оцифровка лекал: ' + lecalQ[1].value);
        if (lecal[2].checked) parametrs = parametrs.concat('Градация лекал по карте заказа: ' + lecalQ[2].value);
        if (other[0].checked) parametrs = parametrs.concat('Конвертация лекал в требуемый формат: ' + otherQ[0].value);
        if (other[1].checked) parametrs = parametrs.concat('Вывод лекал на бумагу (без вырезки) ширина бумаги 90 см: ' + otherQ[1].value);
    }

    if (records[0].checked) parametrs = parametrs.concat('Технический рисунок: ' + recordsQ[0].value);
    if (records[1].checked) parametrs = parametrs.concat('Технологическое описание модели, лист раскроя, размерный ряд: ' + recordsQ[1].value);
    if (records[2].checked) parametrs = parametrs.concat('Конфекционная карта: ' + recordsQ[2].value);
    if (records[3].checked) parametrs = parametrs.concat('Схема дублирования: ' + recordsQ[3].value);
    if (records[4].checked) parametrs = parametrs.concat('Таблица измерений в готовом виде (Табель мер): ' + recordsQ[4].value);

    if (other[2].checked) parametrs = parametrs.concat('Подбор материалов и фурнитуры: ' + otherQ[2].value);
    if (other[3].checked) parametrs = parametrs.concat('Изготовление эталона-образца изделия: ' + otherQ[3].value);
    if (other[4].checked) parametrs = parametrs.concat('Изготовление раскладок: ' + otherQ[4].value);
    if (other[5].checked) parametrs = parametrs.concat('Создание электронного каталога на базе оцифрованных эскизов: ' + otherQ[5].value);
    if (other[6].checked) parametrs = parametrs.concat('Создание фото презентации на базе готовых фотографий: ' + otherQ[6].value);

    var newOrder = new order(items[item].name, parametrs, getPrice());
    orders = orders.concat(newOrder);

    basketReload();
    reset();
}

function remove(index) {
    orders.splice(index, 1);
    basketReload();
}

function basketReload() {
    var delitButtonBegin = '<a href="javascript:void(0)" onclick="remove('
    var delitButtonEnd = ');">удалить</a>'

    var positions = Array.from(document.getElementsByClassName('position'));
    for (let i = 0; i < positions.length; i++) {
        const element = positions[i];
        element.remove();
    }
    if (orders.length > 0) {
        document.getElementById('basket').style.display = 'block';
        for (let i = 0; i < orders.length; i++) {
            const element = orders[i];
            var div = document.createElement('div');
            div.className = "position";
            div.innerHTML = element.item + ': ' + element.price + ' ' + delitButtonBegin + i + delitButtonEnd;
            document.getElementById('basketlog').appendChild(div);
        }
    }
    else document.getElementById('basket').style.display = 'none';
}

function sendOrder(name, phone, mail) {
    var content = document.getElementById('mail');
    var p = document.createElement('p');
    var price = 0;
    var br = '<br>'

    content.style.display = 'block';

    p.innerHTML = 'посетитель: ' + name + br;
    content.appendChild(p);

    p = document.createElement('p');
    p.innerHTML = 'оставил заказ' + br;
    content.appendChild(p);
    for (let index = 0; index < orders.length; index++) {
        const element = orders[index];
        p = document.createElement('h3');
        p.innerHTML = index + 1;
        content.appendChild(p);
        p = document.createElement('p');
        p.innerHTML = element.item + br;
        content.appendChild(p);
        for (let i = 0; i < element.parametrs.length; i++) {
            const par = element.parametrs[i];
            p = document.createElement('p');
            p.innerHTML = par + br;
            content.appendChild(p);
        }
        price += element.price;
    }
    p = document.createElement('p');
    p.innerHTML = 'сумма: ' + price + br;
    content.appendChild(p);

    p = document.createElement('p');
    p.innerHTML = 'номер: ' + phone + br;
    content.appendChild(p);
    p = document.createElement('p');
    p.innerHTML = 'почта: ' + mail + br;
    content.appendChild(p);
}

function complite() {
    sendOrder(document.getElementById('mailFio').value, document.getElementById('mailPhone').value, document.getElementById('mailMail').value);
    document.getElementById('lightbox').style.display = 'none';
}