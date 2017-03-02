# sass-runner

A small wrapper around `node-sass`.

## Usage

`sass-runner` takes two arguments, `sass-runner(data, paths)` and returns a `Promise`.

### data
a `Type: <String>` of sass

### paths
an `Type: <Array>` of paths that are mapped to [`includePaths`](https://github.com/sass/node-sass#includepaths)

## Example

```javascript
const data = `
  $blue: 'blue';

  .test-1 {
    color: $blue;
  }
`;

run(data, ['./src/scss'])
.then(x => console.log(x));
```
