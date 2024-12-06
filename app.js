// 1)1. Yangi obyekt yarating. Unga "name", "age" va "location" kabi xususiyatlarni qo'shing. Keyin, obyektning qiymatlarini konsolda ko'rsating.

// let obyekt ={
//     name: 'NUrjahon',
//     age: 100,
//     location: 'Farg`ona'
// }
// console.log(obyekt['name']);
// console.log(obyekt['age']);
// console.log(obyekt['location']);

// 2)Obyekt ichida boshqa obyekt yarating. Masalan, "address" obyektini asosiy obyektda joylashtiring, unda "city" va "zipCode" kabi xususiyatlar bo'lsin.

// let res = {
//     name:'Ali',
//     age:23,
//     addres:{
//         city:'Toshkent',
//         zipcode:100000,
//     }
// }
// console.log(res);
// console.log(res.addres);

// 3)Biror obyektda mavjud bo'lgan xususiyatni o'zgartirish, yangi xususiyat qo'shish va xususiyatni o'chirish vazifasini bajaring.

// let res = {
//     age: 24,
//     name: 'joni',
//     lastName: 'abs'
// }
// res.age = 15,
// delete res.name
// console.log(res);

// 4)Ushbu obyetkdan home va work qiymatlarini destructuring orqali oling.

// const user = {
//     name: "Toshpo'lat",
//     age: 30,
//     address: {
//         city: "Tashkent",
//         street: "Amir Temur Street",
//         zipCode: 100000,
//     },
//     contact: {
//         email: "ulugbek@example.com",
//         phone: {
//         home: "123-4567",
//         work: "765-4321",
//         },
//     },
//     };
//     const {
//         contact:{
//             phone:{
//                 home,
//                 work,
//             }
//         }
//     } = user;

// console.log(` home => ${home}`);
// console.log(`work=> ${work}`);


// 5) .?  optional chainning nima uchun kerakligi haqida 3 ta sabab yozing.

// 1)  xatoliklarni kamaytirish uchun
// 2)  kodni qisqartirish uchun va soddalashtiradi
// 3)  Malumotni dinamikligi bilan ishlashda foydalaniladi

// Qolgan malumot pdf shaklda yuklandi!!