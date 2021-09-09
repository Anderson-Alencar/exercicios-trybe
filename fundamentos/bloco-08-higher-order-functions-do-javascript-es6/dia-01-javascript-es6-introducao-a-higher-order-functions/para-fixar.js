const wakeUp = () => 'Acordando!!';
const breakfast = () => 'Bora tomar café!!';
const goToSleep = () => 'Partiu dormir!!';

const doingThings = (func, action) => {
  action(func());
}

doingThings(wakeUp, console.log);
doingThings(breakfast, console.log);
doingThings(goToSleep, console.log);
