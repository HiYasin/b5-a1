function formatString(input: string, toUpper?: boolean): string {
    return toUpper || toUpper === undefined ? input.toUpperCase() : input.toLowerCase();
}


function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    return items.filter(item => item.rating > 4);
}



function concatenateArrays<T>(...arrays: T[][]): T[] {
    const newArray: T[] = [];
    for (const array of arrays) {
        for (const item of array) {
            newArray.push(item);
        }
    }
    return newArray;
}



class Vehicle {
    constructor(private make: string, private year: number) { }

    getInfo(): string {
        return `Make: ${this.make}, Year: ${this.year}`;
    }
}
class Car extends Vehicle {
    constructor(make: string, year: number, private model: string) {
        super(make, year);
    }

    getModel(): string {
        return `Model: ${this.model}`;
    }
}



function processValue(value: string | number): number {
    return typeof value === 'number' ? value * 2 : value.length;
}



interface Product {
    name: string;
    price: number;
}
function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) {
        return null;
    } else {
        let highestPrice: Product = products[0];
        for (const product of products) {
            if (product.price > highestPrice.price) {
                highestPrice = product;
            }
        }
        return highestPrice;
    }
}



enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}
function getDayType(day: Day): string {
    return (day === Day.Saturday || day === Day.Sunday) ? 'Weekend' : 'Weekday';
}



async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
        if (n < 0) {
            reject(new Error("Negative number not allowed"));
        } else {
            setTimeout(() => {
                resolve(n * n);
            }, 1000);
        }
    });
}