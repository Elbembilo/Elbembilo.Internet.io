async function start(){
    return await Promise.resolve('async is working')
}

start().then(console.log)

class Until {
    static id = Date.now()
}
console.log('Until id:', Until.id)