export class Person {
	constructor(firstName, email, age) {
		this.firstName = firstName;
		this.email = email;
		this.age = age;
		this.id = new Date().getTime();
	}
}