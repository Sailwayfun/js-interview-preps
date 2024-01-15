class Car {
    setName(name) {
        this.name = name;
    }
    getName(name) {
        return this.name;
    }
}

const myCar = new Car();
myCar.setName('BMW');
console.log(myCar.getName());//這裡的this都是指向myCar這個實例

//////////////////////////////////////////

function sayHello() {
    // console.log(this);
}

sayHello();//這裡因為環境是Node，所以this指向的是global

////////////更改this值的方法//////////////////////

function sayYes() {
    console.log(this);
}

sayYes.call({ name: "John" });//call可以改變this的指向，這裡的this指向的是{name: "John"}
sayYes.call(3);//非嚴格模式下，傳入的參數會被轉為物件型別，這裡的this指向的是[Number: 3]

////////////綁定this值的方法//////////////////////
function eatLunch() {
    console.log(this.name + " is eating luunch");
}
eatLunch.bind({ name: "John" })();//John is eating luunch
//bind可以綁定this的指向，這裡的this指向的是{name: "John"}