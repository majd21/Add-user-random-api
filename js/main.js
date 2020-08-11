const addUser = document.getElementById("add-user");
const sort = document.getElementById("sort-users");
const showMillion = document.getElementById("showMillion");
const double = document.getElementById("double");
const main = document.getElementById("main");

let data = [];
getUsers();
getUsers();

// Get user and money
async function getUsers() {
  const res = await fetch("https://randomuser.me/api");
  const users = await res.json();
  console.log(users);
  const deta = users.results[0];

  const newUser = {
    name: `${deta.name.first} ${deta.name.last}`,
    money: Math.floor(Math.random() * 2000000),
  };
  pushData(newUser);
}

function pushData(newr) {
  data.push(newr);
  UpdataMain();
}

function UpdataMain(Pd = data) {
  main.innerHTML = `<h2>User <strong>Wealth</strong></h2>`;
  Pd.forEach((data) => {
    main.innerHTML += `
        <h3>${data.name} <strong>${dollor(data.money)}</strong></h3>
        `;
  });
}

function sortUsers() {
  data.sort((a, b) => b.money - a.money);
  UpdataMain();
}

function showMillions() {
  data = data.filter((user) => user.money > 999999);
  UpdataMain();
}

function doubles() {
  data = data.map((user) => {
    return { ...user, money: user.money * 2 };
  });
  UpdataMain();
}

function dollor(mon) {
  return "$" + mon.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
}

addUser.addEventListener("click", getUsers);
sort.addEventListener("click", sortUsers);
showMillion.addEventListener("click", showMillions);
double.addEventListener("click", doubles);
