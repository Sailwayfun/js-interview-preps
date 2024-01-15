function useState(initialState) {
    // write your code here
    let state = initialState;
    let stateList = [];
    let stateIndex;

    function getState() {
        // write your code here
        // stateIndex = stateList.length;
        if (stateList[stateIndex]) {
            return stateList[stateIndex];
        }
        stateList[stateIndex] = state;
        return state;
    }

    function setState(updatedState) {
        // write your code here
        let stateToUpdate = stateList[stateIndex];
        stateToUpdate = updatedState;
        stateList[stateIndex] = updatedState;
        return;
    }
    stateIndex++;
    return [getState, setState];
}

const [score, setScore] = useState(0);
const [player, setPlayer] = useState('Max');
const [test, setTest] = useState(true);

console.log(score()); // 0
console.log(player()); // 'Max'

setScore(5);
setPlayer('Shirney');

console.log(score()); // 5
console.log(player()); // 'Shirney'

console.log(test());
setTest(false);
console.log(test());