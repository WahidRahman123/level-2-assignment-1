//* Problem 1
const filterEvenNumbers = (input: number[]): number[] => {
    return input.filter((value: number) => value % 2 === 0)
}

filterEvenNumbers([1, 2, 3, 4, 5, 6])

//* Problem 2
function reverseString(input: string): string {
    return input.split("").reverse().join("")
}

reverseString("typescript")

//* Problem 3 
type StringOrNumber = string | number;
const checkType = (input: StringOrNumber): string => {
    if(typeof input === "string") {
        return "String";
    } else {
        return "Number"
    }
}

checkType("hello");
checkType(42);

//* Problem 4
const getProperty = <T, K extends keyof T>(user: T, key: K) => {
    return user[key];
}
const user = { id: 1, name: "John Doe", age: 21 };
getProperty(user, "name");

//* Problem 5
interface Book {
    title: string;
    author: string;
    publishedYear: number;
}

const toggleReadStatus = (book: Book): Book & { isRead: boolean } => {
    return {...book, isRead: true}
}

const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };
toggleReadStatus(myBook);

//* problem 6
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    grade: string;
    constructor(name: string, age: number, grade: string) {
        super(name, age);
        this.grade = grade;
    }

    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`
    }
}

const student = new Student("Alice", 20, "A");
student.getDetails();

//* problem 7
const getIntersection = (array1: number[], array2: number[]): number[] => {
    const result: number[] = [];
    for(let i of array1) {
        for (let j of array2) {
            if(i === j) {
                result.push(i);
                break;
            }
        }
    }

    const newArray = [...new Set(result)]
    return newArray;
}

getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);