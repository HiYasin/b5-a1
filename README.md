
# Differences Between Interface and Type in TypeScript

In TypeScript, both interface and type help describe the shape of data. They are similar but have some small differences.

### 1. **Basic Use**

✅ *Both `interface` and `type` can define the shape of an object.*

```tsx
// Using interface
interface Person {
  name: string;
  age: number;
}

// Using type
type PersonType = {
  name: string;
  age: number;
};

```

---

### 2. **Extending**

✅ *Interfaces use `extends`, types use `&` for combining.*

```tsx
// Interface extending another interface
interface Animal {
  species: string;
}
interface Dog extends Animal {
  barkVolume: number;
}

// Type combining another type
type AnimalType = {
  species: string;
};
type DogType = AnimalType & {
  barkVolume: number;
};

```

---

### 3. **Merging**

✅ *Interfaces with the same name are merged; types throw an error.*

```tsx
// Merging interfaces (allowed)
interface Car {
  brand: string;
}
interface Car {
  speed: number;
}
const myCar: Car = {
  brand: "Toyota",
  speed: 120,
};

// Merging types (not allowed - this throws an error)
type Bike = {
  brand: string;
};
/*
type Bike = {
  speed: number;
};
*/

```

---

### 4. **More Features with Type**

✅ *Types can create union types, tuples, etc. but Interface doesn’t allow.*

```tsx
// Union Type
type Status = "success" | "error" | "loading";

// Tuple Type
type Point = [number, number];
```

---



# What is the Use of the `keyof` Keyword in TypeScript?

The `keyof` keyword is used to get the **names of properties** from a type or interface.

It helps you create safer and more flexible code by **working with property names** as types.

---

### ✅ Why use `keyof`?

- To get the keys (names) of an object type
- To make sure you only use valid property names
- To reduce mistakes when accessing object properties

---

### 🔍 Example

```
interface Person {
  name: string;
  age: number;
}

type PersonKeys = keyof Person;
```

Here, `PersonKeys` will be a type of `"name"` | `"age"`.

---
