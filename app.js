let cheese = 0


let upgrades = 0

let autoMine = 0

let clickUpgrades = [
  {
    name: 'pickaxe',
    price: 100,
    quantity: 0,
    bonus: 1
  },
  {
    name: 'Laser Cutter',
    price: 500,
    quantity: 0,
    bonus: 5,
  }
];

let automaticUpgrades = [
  {
    name: 'rover',
    price: 600,
    quantity: 0,
    bonus: 20
  },
  {
    name: 'Space Station',
    price: 25000,
    quantity: 0,
    bonus: 50
  }
];

function mine() {
  cheese += (1 + upgrades)
  console.log(cheese)
  drawCheese()
}

function addUpgrades() {
  upgrades = 0
  for (let i = 0; i < clickUpgrades.length; i++) {
    const clickUpgrade = clickUpgrades[i];
    upgrades += clickUpgrade.quantity * clickUpgrade.bonus
  }
  console.log(upgrades)
  drawUpgrades()
}


function purchase(itemName) {
  const foundItem = clickUpgrades.find(item => item.name == itemName)
  if (cheese >= foundItem.price) {
    foundItem.quantity++
    cheese -= foundItem.price
    foundItem.price *= 1.25
    addUpgrades()
    drawCheese()
  }
}


function addAutoUpgrades() {
  autoMine = 0
  for (let i = 0; i < automaticUpgrades.length; i++) {
    const autoUpgrade = automaticUpgrades[i];
    autoMine += (autoUpgrade.quantity * autoUpgrade.bonus)
    drawAutoUpgrades()
  }

}


addAutoUpgrades()



function automaticMine() {
  cheese += autoMine
  console.log(cheese)
  drawCheese()
}

function purchaseAutoUpgrade(itemName) {
  const foundItem = automaticUpgrades.find(item => item.name == itemName)
  if (cheese >= foundItem.price) {
    foundItem.quantity++
    cheese -= foundItem.price
    foundItem.price *= 1.25
    addAutoUpgrades()
    drawCheese()

  }
}





function drawCheese() {
  const cheeseElm = document.getElementById('cheeseTotal');
  cheeseElm.innerHTML = cheese
}

drawCheese()


function drawUpgrades() {
  const upgradesElm = document.getElementById('upgradesTotal');
  upgradesElm.innerHTML = upgrades
}

drawUpgrades()

function drawAutoUpgrades() {
  const autoUpgradesElm = document.getElementById('autoMine');
  autoUpgradesElm.innerHTML = autoMine
}

drawAutoUpgrades()

setInterval(automaticMine, 3000);