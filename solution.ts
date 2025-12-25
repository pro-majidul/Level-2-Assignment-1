const formatValue = (
  value: string | number | boolean
): string | number | boolean => {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  if (typeof value === "number") {
    return value * 10;
  }
  return !value;
};


const getLength = (input: string | any[]): number => {
  if(typeof input === "string"){

      return input.length;
  }else if(Array.isArray(input)){
      return input.length;
  } else {
      return 0;
  }
}

class Person {
    name: string;  
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getDetails(): string {
        return ` 'Name: ${this.name}, Age: ${this.age}';`;
    }
}


const filterByRating = (
  movies: { title: string; rating: number }[]
): { title: string; rating: number }[] => {
  const highRatedMovies = movies.filter((movie) => {
    if (movie.rating > 5 || movie.rating < 0) {
      return false;
    }
    return movie.rating >= 4.5;
  });
  return highRatedMovies;

 
};


const filterActiveUsers = (value: { id: number, name: string, email: string, isActive: boolean }[]): { id: number, name: string, email: string, isActive: boolean }[] => {
    return value.filter(val => val.isActive === true)
}

interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

const printBookDetails = (value: Book): void => {
    console.log(`Title: ${value.title}, Author: ${value.author}, Published: ${value.publishedYear}, Available: ${value.isAvailable}`)
}


const getUniqueValues = (arr1: number[], arr2: number[]): number[] => {
  const data = new Set([...arr1, ...arr2]);
  return [...data];
};



type PriceNumber = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};
const calculateTotalPrice = (value: PriceNumber[]) => {
  const finaltaka = value.map((val) =>
    val.discount
      ? val.price * val.quantity -
        val.price * val.quantity * (val.discount / 100)
      : val.price * val.quantity
  );
  const grandtotal = finaltaka.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  return grandtotal;
};
