let personName: string= "Muhammad Abullah"
console.log("lowercase:", personName.toLowerCase());

console.log("uppercase:", personName.toUpperCase());

console.log("title case:", personName.replace(/\bw/g,c => c.toUpperCase()));