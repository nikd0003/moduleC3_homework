class PowerSupply {
    constructor(name, power){
        this.name = name;
        this.power = power;
        this.isPlugged = false;
    }
    // Определяем подключенный к электропитанию прибор
    plugIn() {
        console.log(this.name + " - работает!");
        this.isPlugged = true;
    }

    // Определяем отключенный от электропитания прибор
    unplug() {
        console.log(this.name + " - обесточен!");
        this.isPlugged = false;
    }
}

// Освещение (1-й прибор)
class Lamp extends PowerSupply {
    constructor (name, brand, power, bulbType) {
        super(name, power);
        this.brand = brand;
        this.bulbType = bulbType;
        this.isPlugged = true;
    }
}

// Сплит-система (2-й прибор)
class SplitSystem extends PowerSupply {
    constructor(name, brand, power, type, functionality) {
        super(name, power);
        this.brand = brand;
        this.type = type;
        this.functionality = functionality;
        this.isPlugged = false;
    }
}

// Экземпляр освещения
const light = new Lamp("Умное освещение для квартиры", "DALI", "50Вт", "Светодиодное");

// Экземпляр сплит-системы
const conditioner = new SplitSystem("Мультисплит-система на 3 комнаты", "Daikin", "6,5кВт", "Инверторный", "Контроль климата");

// Отключить освещение от питания
light.unplug();

// Включить питание сплит-системы
conditioner.plugIn();

// Вывести состояние в консоль
console.log(conditioner)
console.log(light)
