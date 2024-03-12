// function consolidateData(sessions) {
//     const loopedUsers = {};
//     const copy = [...sessions];
//     copy.forEach(
//         ({ user, duration, books }) => {
//             if (!loopedUsers[user]) {
//                 loopedUsers[user] = { duration, books };
//             } else {
//                 loopedUsers[user].books = new Set(...books, loopedUsers[user].books);
//                 loopedUsers[user].duration += duration;
//             }
//         }
//     );
//     return Object.entries(loopedUsers);
// }

function consolidateData(sessions) {
    const mergedData = [];
    const seenUsers = new Set();
    sessions.forEach(session => {
        const userId = session.user;

        ////if the user is seen


    });
    return mergedData;
}

console.log(consolidateData(
    [{ user: 8, duration: 50, books: ['The Hobbit'] },
    { user: 7, duration: 150, books: ['Pride and Prejudice'] },
    { user: 1, duration: 10, books: ['The Lord of the Rings'] },
    { user: 7, duration: 100, books: ['The Great Gatsby', 'Animal Farm'] },
    { user: 7, duration: 200, books: ['The Great Gatsby'] },
    { user: 2, duration: 200, books: ['1984'] },
    { user: 2, duration: 200, books: ['The Great Gatsby'] },]
));