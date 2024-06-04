const info_one = document.getElementById('info_one');

info_one.addEventListener('submit', (e) => {
    e.preventDefault();

    // Отримуємо значення з усіх input
    var Name_one = document.getElementById('Name_one').value;
    var phone_one = document.getElementById('phone_one').value;
    var town_one = document.getElementById('town_one').value;


    var token = '7407947815:AAFjpPnJyHXGL7RocoCIq1ItEE8uOExsOY4';
    var chat_id = '-4253217882';

    // Формуємо текст повідомлення з усіма даними
    var my_text = `Name: ${Name_one}\nPhone: ${phone_one}\nTown: ${town_one}`;

    // Виправлено форматування URL запиту
    var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${encodeURIComponent(my_text)}`;

    // Створюємо та відправляємо запит
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();

    // Очищуємо всі поля input та select після відправки
    document.getElementById('Name_one').value = "";
    document.getElementById('phone_one').value = "";
    document.getElementById('town_one').value = "";
});