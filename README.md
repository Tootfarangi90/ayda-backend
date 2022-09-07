# ayda-backend


# Test

## Use this link to [get started](https://www.valentinog.com/blog/jest/)


```console

* npm i jest --save-dev

* npm i jest-runner-groups

mkdir __tests__

touch ./__test__/filterByTerm.spec.js

mkdir src 

touch ./src/filterByTerm.js

``` 

### In package.json add these lines:

```javascript
  "scripts": {
    
    ...

    "test": "jest --group=unit",
    "component": "jest --group=component",
    "integration": "jest --group=integration"
  },

  "jest": {
     "runner": "groups"
  }

```

### In filterByTerm.js 

```javascript
function filterByTerm(inputArr, searchTerm) {
    if(!searchTerm) throw Error('searchTerm cannot be empty')
    if(!inputArr.length) throw Error('inputArray cannot be empty')
    const regex = new RegExp(searchTerm, "i")
    return inputArr.filter(function(arrayElement){
        return arrayElement.url.match(regex)
    })
}

module.exports = filterByTerm
```

### In filterByTerm.spec.js

```javascript
/**
 * @test
 */

const filterByTerm = require('../src/filterByTerm')

describe("Filter function", () => {
    test("it should filter by a search term (link)", () => {
      const input = [
        { id: 1, url: "https://www.url1.dev" },
        { id: 2, url: "https://www.url2.dev" },
        { id: 3, url: "https://www.link3.dev" }
      ];

      const output = [{ id: 3, url: "https://www.link3.dev" }];
      const output2 = [{ id: 1, url: "https://www.url1.dev" }, { id: 2, url: "https://www.url2.dev" }];
      
      expect(filterByTerm(input, "link")).toEqual(output);
      
      expect(filterByTerm(input, "LINK")).toEqual(output);

      expect(filterByTerm(input, "uRl")).toEqual(output2)

      expect(filterByTerm(input, "url")).toEqual(output2)


    });
  });

```

## Use this [link](https://blog.logrocket.com/node-js-express-test-driven-development-jest/) for the next part

```console
npm i http-errors supertest


```
