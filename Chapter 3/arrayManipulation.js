const theList = ['Laurence', 'Svekis', true, 35, null, undefined, {test:'one', score: '55'}, ['one', 'two']]
console.log(theList)

theList.shift();
theList.unshift('FIRST');
theList.splice(2,5)
theList.pop()
theList.splice(2,0, 'MIDDLE', 'hello World')
theList.push('LAST')


console.log(theList)