// TYPES

// let awesomeName: string = 'First Name';
// awesomeName = 'Second Name';
// awesomeName = awesomeName.toUpperCase();
// console.log(awesomeName);

// let amount: number = 20;
// amount = 20 - 12;

// let isAwesome: boolean = true;
// isAwesome = false;

// console.log(awesomeName, amount, isAwesome);

// ------------------------------------------------------------------------------------------------------

// UNIONS

// let tax: number | string = 12;
// tax = 'VAT';
// tax = 12;
// console.log(tax);

// let requestStatus: 'Success' | 'Failure' | 'Being Processed' =
// 	'Being Processed';

// requestStatus = 'Success';

// console.log(requestStatus);

// ------------------------------------------------------------------------------------------------------

// ANY

// let someType: any = 'Something';
// someType = 7;
// someType = false;

// let random;

// ------------------------------------------------------------------------------------------------------

// EXAMPLE

// const books = ['1999', 'FIOS', 'Life is Great'];

// let foundBook: string | undefined; // (explicitly define undefined to avoid runtime errorsss)

// for (let book of books) {
// 	if (book === '1999') {
// 		foundBook = book;
// 		foundBook = foundBook.toUpperCase();
// 		break;
// 	}
// }

// console.log(foundBook?.length);

// ------------------------------------------------------------------------------------------------------

// ARRAYS

// let prices: number[] = [21, 27, 17, 8, 25];

// let fruits: string[] = ['Orange', 'Mango'];

// let randomValues: [] = ['something']; // It wil throw an error as typescript assumes it as an empty array

// let names = ['John', 'Bosco', 21];

// let array: (string | boolean)[] = ['Something', true];

// ------------------------------------------------------------------------------------------------------

// OBJECTS

// let bike: { brand: string; year: number } = { brand: 'KTM', year: 2020 };

// let book = { title: 'FIOS', cost: 120 };
// let pen = { title: 'Reynolds', cost: 12 };
// let notebook = { title: 'classmate' };

// let items: { readonly title: string; cost?: number }[] = [book, pen, notebook];
// // items[0].title = 'Something';

// let product1 = { brand: 'KTM', year: 2020 };
// let product2 = { brand: 'BAJAJ' };

// let products: { brand: string; year?: number }[] = [product1, product2];

// ------------------------------------------------------------------------------------------------------

// FUNCTIONS

// function sayHi(name: string): string {
// 	console.log(`Hello ${name.toUpperCase()}`);
// 	name = name.toUpperCase();
// 	return name;
// }

// sayHi('John');

// Challenge

// let names: string[] = ['Teeban', 'Lawernece', 'Paramesh', 'Siva'];

// function findName(names: string[], searchName: string): boolean {
// 	for (let name of names) {
// 		if (name === searchName) {
// 			console.log(`${name} is in the array`);
// 			return true;
// 		}
// 	}
// 	console.log(`${searchName} is not in the array`);
// 	return false;
// }

// findName(names, 'Teeban');
// findName(names, 'John');

// -----------------------------------------------------------------

// let names: string[] = ['Teeban', 'Lawernece', 'Paramesh', 'Siva'];

// function isNamesInList(name: string): boolean {
// 	return names.includes(name);
// }

// let nameToCheck = 'Teeban';

// if (isNamesInList(nameToCheck)) {
// 	console.log(`${nameToCheck} is in the List`);
// } else {
// 	console.log(`${nameToCheck} is not in the List`);
// }

// ------------------------------------------------------------------------------------------------------

// OPTIONAL AND DEFAULT PARAMETERS IN FUNCTIONS

// function calculate(price: number, discount?: number): number {
// 	return price - (discount || 0);
// }

// let priceAfterDiscount = calculate(100, 80);

// ------------------------------------------

// function calculate(price: number, discount: number = 0): number {
// 	return price - discount;
// }

// let priceAfterDiscount = calculate(100, 80);

// ------------------------------------------------------------------------------------------------------

// REST PARAMETERS IN FUNCTIONS

// function sum(message: string, ...numbers: number[]): string {
// 	const doubled = numbers.map((num) => num * 2);
// 	console.log(doubled);

// 	const total = numbers.reduce((previous, current) => {
// 		return previous + current;
// 	}, 0);
// 	return `${message} ${total}`;
// }

// let result = sum('This is the total: ', 1, 2, 3, 4, 5);
// console.log(result);

// ------------------------------------------------------------------------------------------------------

// ALIAS

// type Employee = { id: number; name: string; department: string };
// type Manager = { id: number; name: string; employees: Employee[] };

// type Staff = Employee | Manager;

// function printStaffDetails(staff: Staff): void {
// 	if ('employees' in staff) {
// 		console.log(
// 			`${staff.name} is the Manager of ${staff.employees.length} employees`,
// 		);
// 	} else {
// 		console.log(
// 			`${staff.name} is an employee in this ${staff.department} department`,
// 		);
// 	}
// }

// const alice: Employee = { id: 1, name: 'Alice', department: 'Sales' };
// const steve: Employee = { id: 2, name: 'Steve', department: 'Marketing' };
// const jerry: Employee = { id: 3, name: 'Jerry', department: 'Marketing' };

// const bob: Manager = {
// 	id: 1,
// 	name: 'Bobo',
// 	employees: [alice, steve, jerry],
// };

// printStaffDetails(jerry);
// printStaffDetails(bob);

// ------------------------------------------------------------------------------------------------------

// INTERFACE

interface Computer {
	readonly id: number;
	brand: string;
	ram: number;
	upgradeRam(increase: number): number;
	storage?: number;
}

const laptop: Computer = {
	id: 1,
	brand: 'Lenovo',
	ram: 8,
	upgradeRam(amount) {
		this.ram += amount;
		return this.ram;
	},
};

laptop.storage = 256;

console.log(laptop.upgradeRam(4));

console.log(laptop);
