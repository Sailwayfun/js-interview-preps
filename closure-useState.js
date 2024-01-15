let stateIndex = 0;
let stateList = [];

function useState(initialState) {
    // write your code here
    let state = initialState;
    const _index = stateIndex;

    function getState() {
        // write your code here
        if (stateList[_index] !== undefined) {
            return stateList[_index];
        }/// state 值是false 的時候也需要取 cache 裡面的值，所以判斷條件要是不等於undefined
        stateList[_index] = state;
        return state;
    }

    function setState(updatedState) {
        // write your code here
        stateList[_index] = updatedState;
        return;
    }
    stateIndex++;
    return [getState, setState];
}

const [score, setScore] = useState(0);
const [player, setPlayer] = useState('Max');
const [test, setTest] = useState(true);

console.log({ stateIndex });

console.log(score()); // 0
console.log(player()); // 'Max'

setScore(5);
setPlayer('Shirney');

console.log(score()); // 5
console.log(player()); // 'Shirney'

console.log(test());
setTest(false);
console.log(test());