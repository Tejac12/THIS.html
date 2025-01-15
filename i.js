let obj1 = {
    id: 1,
    name: "yogi kumar",
    age: 26,
    state: "Ap",
    work: "bank-employee",

}
var details = function (k) {
    console.log(`iam a person with a id no  ${this.id} and with ${this.name} and ${this.age} from state ${this.state} and working as ${this.work} & ${k}`)
}
// console.log(obj1.details())
details.call(obj1, "nice to meet you")
details.apply(obj1, ["id", "345"])

let obj2 = {
    id: 1467,
    name: "Raj",
    age: 55,
    state: "nandigam",
    work: "delivery partner",
    salary: "4000$",
    sibiling: true

}
var details = function (z) {
    console.log(`iam a person with a id no  ${this.id} and name ${this.name} and ${this.age} from state ${this.state} and working as ${this.work} & get a salary of ${this.salary} & and have a sibling${this.sibiling} &${z}`)
}
details.call(obj2, "iam married")


let obj3 = {
    patientid: "A0345S6",
    name: "Don lee",
    age: 33,
    state: "California",
    bussiness: "car garage",
    disease: "hernea",
    bill: true
}
var details = function (k) {
    console.log(`iam a person with a patitent id ${this.patientid} and name of  ${this.name} and ${this.age} from state ${this.state} and runs a bussiness of ${this.bussiness} & suffering with a disease of ${this.disease} & paid a bill  ${this.bill}& ${k}`)
}
details.call(obj3, "recovered in a month")




let obj4 = {
    productno: 3456789,
    Buyername: "rajashekar",
    age: 20,
    orderplaced: "3 Dec",
    mobile: "Iphone-11",
    cost: 70000,
    delivery: "6-Dec"

}
var details = function (k, x) {
    console.log(`i ordered cellphone with product id  no  ${this.productno} and with a name of  ${this.Buyername} and  age ${this.age}  and order placed on ${this.orderplaced} and buys a mobile ${this.mobile} & costs ${this.cost} and orded delivered on ${this.delivery} & ${k} & ${x}`)
}
// console.log(obj1.details())
details.call(obj4, "works fine")

let obj5 = {
    transcationid: "TSDFG12345K09",
    Accountname: "faraz",
    age: 28,
    state: "Maharashtra",
    transcationstatus: "failed",
    amountsettled: "48hours"

}
var details = function (k) {
    console.log(`Transcation id ${this.transcationid} & has a account name ${this.Accountname} and ${this.age} from state ${this.state} and transcation status ${this.transcationstatus} & amount settled in ${this.amountsettled} & ${k}`)
}
// details.call(obj5, "nice to meet you")
details.apply(obj5, ["complaint registered"])
const complaint = details.bind(obj5, "complaint solved")
console.log(complaint())



let obj6 = {
    name: "Tony"
}
let printName = {
    name: "steve",
    sayHi: function (age) {
        console.log(this.name + "age is" + age);

    }
}

Object.prototype.MyBind = function (bindObj, ...args) {
    bindObj.myMethod = this;
    return function () {
        bindObj.myMethod(...args)
    }
}
let HiFun = printName.sayHi.MyBind(obj6, 42);
HiFun()




