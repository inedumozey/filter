const filter = require('./build/bundle.js')

const data = [
    {
        id:1,
        name: "phones",
        location: "US",
        types:[
            {
                id: 1,
                name: "iPhone",
                colors: ["pink", "red"]
            },
            {
                id: 2,
                name: "Infinix",
                colors: ["brown", "black"]
            }
        ]
    },

    {
        id: 2,
        name: "cars",
        location: "France",
        types:[
            {
                id: 1,
                name: "Renault",
                colors: ["green", "gray"]
            },
            {
                id: 2,
                name: "Bugatti",
                colors: ["white", "black"]
            }
        ]
    },

    {
        id:3,
        name: "phones",
        location: "Nigeria",
        types:[
            {
                id: 1,
                name: "iPhone",
                colors: ["yellow", "orange"]
            },
            {
                id: 2,
                name: "Infinix",
                colors: ["gold", "dark blue"]
            }
        ]
    },
]

const newArray = filter({
    data,
    keys: [ "id", "location" ],
    input: "nigeria"
})

function runTest(newArray){
    console.log('************starting test************')
    console.log('')

    if(newArray[0].location !== data[2].location){
        throw new Error("internal error")
    }

    setTimeout(()=>{
        console.log('')
        console.log('************test ended with no problem************')
    }, 2000)
}
runTest(newArray)