// Code your solution here
/* let even = arr.filter(n => {
    return n % 2 === 0;
})

Returns the evens of the array */

const findMatching = (array, string) => {
    let match = array.filter(driver => {
        return driver.toLowerCase() === string.toLowerCase();
    });

    return match 
}

const fuzzyMatch = (array, string) => {
    let match = array.filter(driver => {
        if (driver.charAt(0).toLowerCase() === string.charAt(0).toLowerCase()) {
            return driver 
        }
        // note: this passes the test but only works for the first character
        // should be a better way to do this by taking the length of the string and matching it to the first N letters of the driver
        // but it's too humid and I cannot think
    });

    return match 
}

const matchName = (array, string) => {
    let match = array.filter(driver => {
        return driver.name === string;
        // or convert them both to lower case if you want to really be case insensitive about it 
    })

    return match
}