// as we know for-each method can't return a value so to return a value from a method we use filter method. the syntax are similar to the for-each method.

//it used in true false type use cases.

let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const valueGreaterThan4 = myArr.forEach((num)=>{
    return num > 4
})
const valueGreaterThan5 = myArr.filter((num)=>{
    return num > 5
})

console.log(valueGreaterThan5);     //[ 6, 7, 8, 9 ]
console.log(valueGreaterThan4);     //undefined: because foeach method can't return
                                    //a values to allocated variable.

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
let bookMOdified = books.filter((bk)=>{
return bk.edition > 1980 && bk.genre === 'Non-Fiction'
})
console.log(bookMOdified);
