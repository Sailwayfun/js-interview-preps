const resumeList = [                                          // 1
    {                                                           // 2
        name: 'Alice',                                            // 3
        email: 'alice@email.com',                                 // 4
    }, {                                                         // 5
        name: 'Bob',                                              // 6
        email: 'bob@email.com',                                   // 7
    }, {                                                         // 8
        name: 'Cindy',                                            // 9
        email: 'cindy@email.com',                                 // 10
    }                                                           // 11
];                                                             // 12
// 13
const employeeList = resumeList;                               // 14
let frontendList = resumeList;                               // 15
// 16
employeeList[2] = {                                           // 17
    name: 'Christy',                                            // 18
    email: 'christy@email.com',                                 // 19
};                                                             // 20
// 21
employeeList[1].email = 'spongebob@email.com';                 // 22
// 23
frontendList = [{																		          // 24
    name: 'Darren',                                             // 25
    email: 'darren@email.com'                                   // 26
}];

// console.log(employeeList);
// console.log(resumeList);
// console.log(frontendList);

// Question2                                                  // 37
console.log(resumeList[2]);                                    // 38
console.log(employeeList[2]);                                  // 39
// 40
// Question3                                                  // 41
console.log(resumeList[1]);                                    // 42
console.log(employeeList[1]);   