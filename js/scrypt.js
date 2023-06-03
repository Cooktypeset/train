//Напиши клас Rectangle який створює об'єкт
//з ​​властивостями height, width
//і методом calculateArea() для підрахунку прлощі прямокутника.
// class Rectangle {
    // constructor({ height, width }) {
        // this.height = height;
        // this.width = width;
    // }
    // calculateArea() {
        // return this.height * this.width
    // }
    
// }
// const rectangle = new Rectangle({ height: 5, width: 10 })
// console.log(rectangle.calculateArea())


// Створи клас Phone який створює об'єкт з ​​властивістю price.
// Додай статичну властивість MAX_PRICE зі значенням 40000 - максимально допустима ціна телефону.
// Оголоси приватну властивість price доступ до якої буде через геттер та сеттер.
// Додай сетеру price перевірку значення параметра newPrice, що передається.Якщо воно більше за MAX_PRICE,
// сеттер нічого не робить, а якщо менше або дорівнює, то перезаписує ціну телефону.
class Phone{
    #price;
    static MAX_PRICE = 40000;
    constructor(price) {
        this.#price = price;
    }
    get price() {
      return this.#price
    }
    set price(newPrice) {
        if (newPrice >= Phone.MAX_PRICE) {
            this.#price = newPrice
              return
        }
      
    }
}
const newPhone = new Phone(55555)
 console.log(newPhone.price);
 newPhone.price = 500000;
 console.log(newPhone.price)

