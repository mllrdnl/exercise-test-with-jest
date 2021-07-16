// import the function sum from the app.js file
const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar, oneEuroIs } = require('./app.js')


    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * oneEuroIs["USD"]; 
    
    // this is the comparison for the unit test
     expect(expected).toBe(dollars); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})


test("One thousand yen should be around 6.25 pounds", function(){
    
    const { fromYenToPound, oneEuroIs } = require('./app.js')

    const pounds = fromYenToPound(1000)

    const expected = (1000/oneEuroIs["JPY"]) * oneEuroIs["GBP"]; 
    
     expect(expected).toBe(pounds); 
})

test("Two dollars should be around 213.17 yen ", function(){
    
    const { fromDollarToYen, oneEuroIs } = require('./app.js')

    const yen = fromDollarToYen(2)
    
    const expected = (2/oneEuroIs["USD"]) * oneEuroIs["JPY"]; 
    
     expect(expected).toBe(yen); 
})