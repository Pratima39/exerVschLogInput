const resultsList = document.getElementById('results');
const logList = []
new URLSearchParams(window.location.search).forEach((value, name) => {
    resultsList.append(`${name}: ${value}`)
    resultsList.append(document.createElement('br'))
    logList.push(`${name}: ${value}`)
});
console.log(logList);