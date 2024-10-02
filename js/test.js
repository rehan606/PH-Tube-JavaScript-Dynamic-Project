

function getTimeString(time){
    const hour = parseInt(time / 3600);
    let secondRemaining = time % 3600;
    const minute = parseInt(secondRemaining / 60);
    secondRemaining = secondRemaining % 60;
    return `${hour} hour ${minute} minute ${secondRemaining} Second ago `
}
// console.log(getTimeString(4459))


