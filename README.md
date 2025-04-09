# js stuff

## surreal

normal surrealjs but with the "custom aliases" section removed, and fixed parts where writing to global
properties on window or document that already existed would cause errors (it now skips existing properties).

## esm-in-standard

allows for usage of esm modules in a normal script tag. include the script in a normal script tag, and you can
use the esm import() function as window._import

since it's created from a ES module, you can listen to esmReady on window, which fires once window._import is
created.

for more convenient usage, you can use window.using, like this:

```js
using(["my-esm-module.js", "my-second-module.js"], (modules) => {
    const mymodule = modules[0];
    const default = mymodule.default;
    const mysecondmodule = modules[1];
    // ...do stuff...
});
```

if you only have one module, you can omit the brackets around the first argument (it's still passed as a
single element array though). you can also use destructuring to make it a bit nicer.

```js
using("module.js", ([{ default: module }]) => {});
```

finally, you can pass additional arguments to the function, by passing three arguments. again, if there's only
1 argument you can omit passing it as an array. these extra arguments are passed spread to the function.

```js
using("module.js", [1, 2, 3], (modules, arg1, arg2, arg3) => {});
```
