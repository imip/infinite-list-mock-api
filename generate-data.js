const faker = require('faker');
const database = { items: [] };
for (let i = 1; i <= 1000; i++) {
    database.items.push({
      id: `${faker.commerce.productName().toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')}-${i}`,
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      description: faker.commerce.productDescription()
    });
}
console.log(JSON.stringify(database));
