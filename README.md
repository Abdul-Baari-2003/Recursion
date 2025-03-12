# Sorting Algorithms in JavaScript

## 📌 Introduction
This project implements two popular sorting algorithms in JavaScript:
1. **Merge Sort** (A divide-and-conquer sorting algorithm)
2. **Fibonacci Sequence Generation** (Both iterative and recursive approaches)

## 🚀 Features
- Implements Merge Sort using recursion.
- Generates Fibonacci sequences using **iterative** and **recursive** methods.
- Efficient sorting with **O(n log n)** time complexity.
- Handles arrays of any length.

## 📄 Merge Sort Implementation
### 🛠️ How It Works
1. **Divide**: Split the array into two halves.
2. **Conquer**: Recursively sort both halves.
3. **Merge**: Combine the sorted halves into a single sorted array.

```javascript
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    let sortedLeft = mergeSort(left);
    let sortedRight = mergeSort(right);

    return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
    let newArray = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            newArray.push(left[i]);
            i++;
        } else {
            newArray.push(right[j]);
            j++;
        }
    }

    return newArray.concat(left.slice(i)).concat(right.slice(j));
}

// Example Usage
console.log(mergeSort([5, 2, 8, 1, 3, 7, 6, 4]));
```

## 📄 Fibonacci Sequence Implementation
### 🛠️ Iterative Approach
```javascript
function fibs(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    let fibo = [0, 1];
    for (let i = 2; i < n; i++) {
        fibo.push(fibo[i - 1] + fibo[i - 2]);
    }
    return fibo;
}

console.log(fibs(10));
```

### 🛠️ Recursive Approach
```javascript
function fibsRec(n, sequence = [0, 1]) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (sequence.length >= n) return sequence.slice(0, n);
    return fibsRec(n, [...sequence, sequence.at(-1) + sequence.at(-2)]);
}

console.log(fibsRec(10));
```

## 📦 How to Use
1. Clone the repository:
   ```sh
   git clone <repo-url>
   ```
2. Navigate to the project folder:
   ```sh
   cd sorting-algorithms
   ```
3. Run the code using Node.js:
   ```sh
   node mergeSort.js
   node fibonacci.js
   ```

## 🔥 Example Output
```sh
Merge Sort Output:
[1, 2, 3, 4, 5, 6, 7, 8]

Fibonacci Output:
[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
```

## 📜 License
This project is open-source and available under the **MIT License**.

---
💡 **Feel free to contribute, suggest improvements, or report issues!** 😊
