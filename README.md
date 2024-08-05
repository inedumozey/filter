# @mozeyinedu/filter

filter.js filters array of objects with few lines of codes. It is scalable, light weight and simple to use with both simple and complex array of objects of any size

## Description
filter.js is a light weight, plain javascript package that can be used to filter large array of objects.
Can be used for simple array of objects as well as complex ones

## Installation
`npm i @mozeyinedu/filter`

## Usage
...
    
    import filter from "@mozeyinedu/filter";
...

...
    
    const filter = require("@mozeyinedu/filter");
...

filter accept an object that has a total of 5 properties out of which only one is compulsary. It also returns the filtered array, you can assign it to a variable to them

1. data: 
    * data accepts an array of object or function that returns an array.
    * It is compulsary

3. keys: 
    * keys accepts an array or a function that returns an array of strings of properties you are searching for from the object
    * Only the properties specified can be searched for
    * If no keys specified, the function search through the paths (below) for the object path, if non found, all the keys will be up to flter through
    * It is not specific, if a "name" is specified as a key to filter, all other name in the object will be use to filter the object as well
    * Optioanl

3. paths: 
    * paths accepts an object of array(s) of the paths from the object you are searching or accepts a function that returns same thing
    * In this paths, you can customize exactly what you want to allow your client to filter
    * Optional.

4. input:
    * accepts a string or a function that returns a string of the values you are searching from the array

5. cb:
    * a callback that receives a parameter which holds the returned filtered array
    * not compulsary property but neccessary to view the filtered data,
    * the filter function itself returns the filtered array, you can assign it to a variable to get the filtered data also

### Syntax

...
    // const filteredData = filter({})

    const filterdData = filter({
        data: [],
        keys: ["", "", "", ...],
        paths: {
            path_1: ["", "", "", ...],
            path_2: ["", "", "", ...],
            path_3: ["", "", "", ...]
        },
        input: ""
    })

    console.log(filterdData)

    OR

    const filterdData2 = filter({
        data: ()=>[],
        keys: ()=>{
                return ["", "", "", ...]
            },
        paths: ()=>{
            return {
                path_1: ["", "", "", ...],
                path_2: ["", "", "", ...],
                path_3: ["", "", "", ...]
            },
        },
        input: ()=>{
            return ""
        }
    })

    console.log(filterdData2)

    OR

    // passing callback to get the filtered Data

    filter({
        data: [],
        keys: ["", "", "", ...],
        paths: {
            path_1: ["", "", "", ...],
            path_2: ["", "", "", ...],
            path_3: ["", "", "", ...]
        },
        input: "",
        cb: (data)=>{
            console.log(data)
        }
    })
...



### Example codes

####  With Simple Array of Objects

...
   
    import filter from "fine-filter"

    const arrayObj = [
        {
            id: "1",
            name: "name1",
            product: "product1",
            email: "example1@gmail.com"
        },
        {
            id: "2",
            name: "name2",
            product: "product2",
            email: "example2@gmail.com"
        },
        {
            id: "3",
            name: "name3",
            product: "product3",
            email: "example3@gmail.com"
        },
        {
            id: "3",
            name: "name3",
            product: "product3",
            email: "example4@gmail.com"
        }
    ]
...


...

    const newData = filter({
       data: arrayObj,
       keys: [ "name" ],
       input: "name2",
   })
    
    console.log(newData)

    /*
        [
            {
                id: '2',
                name: 'name2',
                product: 'product2',
                email: 'example2@gmail.com'
            }
        ]
    */

    // the object can be filtered using name or email. If input value is empty string or not specified at all, all the object will be returned
...


#### Using "paths"

...

    filter({

        data: ()=>arrayObj,
        paths: {
            name: [ "name", ],
            email: [ "email" ]
        },
        input: "example1@gmail.com",
        cb: data=> console.log(data)

    })

    // the object can be filtered using name or email

    /*
        [
            {
                id: '1',
                name: 'name1',
                product: 'product1',
                email: 'example1@gmail.com'
            }
        ]
    */
...


#### With more complex array of Objects

paths is more usefull when dealing with more complex object 

### Global filtering

#### filtering the array with name using "keys"
When a particular object has same variable names as properties, for example the object above has "name" properties defined in several paths, (name, types[0].name and types[1].name). When a "keys" is used to define the key you want to filter the object with, and "name" is passed, all values assign to all the "name" properties can be used to filter the array. 

...

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
...

...

    filter({
        data: data,
        keys: ()=> [ "name" ],
        input: "iPhone",
        cb: data = > console.log(data)
    })
    

    /* 
        [
            {
                id: 1,
                name: 'phones',
                location: 'US',
                types: [ [Object], [Object] ]
            },
            {
                id: 3,
                name: 'phones',
                location: 'Nigeria',
                types: [ [Object], [Object] ]
            }
        ]

    */
...

...

    filter({
        data,
        keys: ()=>[ "id", "location" ],
        input: "nigeria",
        cb: data=>console.log(data)
    })
    
    /*
        [
            {
                id: 3,
                name: 'phones',
                location: 'Nigeria',
                types: [ [Object], [Object] ]
            }
        ]
    */
...

...

    filter({
        data,
        keys: [ "name" ],
        input: "cars",
        cb: data =>console.log(data)
    })

    /*
        [
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
            }
        ]

    */
...


### Local filtering

#### using paths to filter the object with a specific key - 
If you do not want the behavior of global filter above, paths is here just for you. You can narrow your search to any properties you want by defining the object path explicitly. See examples below

...

    filter({
        data: data,
        paths: {
            phoneName: ["types", "0", "name"]
        },
        input: "iPhone",
        cb: data=>console.log(data)
        }

    })

    /*
        [
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
            }
        ]
    */

    // the paths is directed to the 2nd ordered name, types[0].name, i.e. name at index 0 of types


    // if you try to search for car, it will return empty array since car is not one of the values of types[0].name

    filter({
        data: data,
        paths: {
            phoneName: ["types", "0", "name"]
        },
        input: "car",
        cb: data=> console.log(data)
    })

    /*
        []

    */
...


### Global and Local Filtering

#### Using keys and paths concurrently

For examples
* Global filtring with name and email in "keys"
* At the same time, Local filtering with colors in "paths"

...

    filter({
        data: data,
        keys: [ "name", "email" ],
        paths: {
            colors_0: ["types", "0", "colors"],
            colors_1: ["types", "1", "colors"]
        },
        input: "red",
        cb: data=>console.log(data)
    })

    // you can defined as many paths as you want. The properties can be named anything, not necessarily colors_0 or colors_1
...


...

    filter({
        data: data,
        keys: [ "name", "id" ],
        paths: {
            colors: ["types", "0", "colors"]
        },
        input: "1",
        cb: data=>console.log(data)
    })
...


...

    filter({
        data: data,
        keys: [ "id", "location" ],
        paths: {
            colors_0: ["types", "0", "colors"],
            colors_1: ["types", "1", "colors"],
            name: ["types", "1", "name"]
        },
        input: "dark blue",
        cb: data=>console.log(data)
    })
...

#### Reach me;
* whatsApp/Call: +2348036000347
* [Facebook](https://www.facebook.com/mozey.inedu.3)
