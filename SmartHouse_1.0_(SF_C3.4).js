function PowerSupply(name, power) {
    this.name = name;
    this.power = power;
    this.isPlugged = false;
}

// Определяем подключенный к электропитанию прибор
PowerSupply.prototype.plugIn = function() {
    console.log(this.name + " - работает!");
    this.isPlugged = true;
};

// Определяем отключенный от электропитания прибор
PowerSupply.prototype.unPlug = function() {
    console.log(this.name + " - обесточен!");
    this.isPlugged = false;
};

// Освещение (1-й прибор)
function Lamp(name, brand, power, bulbType) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.bulbType = bulbType;
    this.isPlugged = true;
}

Lamp.prototype = new PowerSupply();

// Сплит-система (2-й прибор)
function SplitSystem(name, brand, power, type, functionality) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.type = type;
    this.functionality = functionality;
    this.isPlugged = false;
}

SplitSystem.prototype = new PowerSupply();

// Экземпляр освещения
const light = new Lamp("Умное освещение для квартиры", "DALI", "50Вт", "Светодиодное");

// Экземпляр сплит-системы
const conditioner = new SplitSystem("Мультисплит-система на 3 комнаты", "Daikin", "6,5кВт", "Инверторный", "Контроль климата");

// Отключить освещение от питания
light.unPlug();

// Включить питание сплит-системы
conditioner.plugIn();

// Вывести состояние в консоль
console.log(conditioner)
console.log(light)
