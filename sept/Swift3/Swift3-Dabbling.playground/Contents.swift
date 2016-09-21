/*
    Playground to mess around with Swift 3 syntax
 */




// Function that uses same internal/external names
func plus(a: Int, b: Int) ->Int {
    return a + b
}




// Function 2 that doesn't require external name
func plus(_ a: Int, _ b: Int) ->Int {
    return a + b + 1
}

// Calls function 1 since variables are named
// returns 3
plus(a:1,b:2)

// Calls function 2 since arguments are anonymous
// returns 9
plus(5,3)
