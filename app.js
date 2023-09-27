// 1
let users = {};
for (let i = 1; i <= 10; i++) {
    let name = prompt("Введите имя пользователя " + i);
    let age = prompt("Введите возраст пользователя " + i);
    users[i] = { "Имя": name, "Возраст": age };
}

for (let id in users) {
    console.log("Пользователь - " + id);
    console.log("Имя - " + users[id]["Имя"]);
    console.log("Возраст - " + users[id]["Возраст"]);
}

console.log(users);