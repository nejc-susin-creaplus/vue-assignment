export default class Person {
  id: number;
  firstName: string;
  lastName: string;
  telephone: string;
  favorite: boolean;

  constructor(raw: any) {
    this.id = raw.id;
    this.firstName = raw.first_name;
    this.lastName = raw.last_name;
    this.telephone = raw.phone_number;
    this.favorite = raw.favorite;
  }

  fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  initials(): string {
    return `${this.firstName.substring(0, 1)}${this.lastName.substring(0, 1)}`;
  }
}
