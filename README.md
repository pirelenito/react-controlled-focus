# React Controlled Focus

One of the biggest advantages of using React is having the possibility of a completely **declarative UI**, which is amazing until you run into trying to controll focus.

This is an attempt at managing `focus` the same way [controled components](http://facebook.github.io/react/docs/forms.html#controlled-components) handle `value`.

The biggest difference between `focus` and `value` is that `focus` is not actually a property of the input itself, but rather the document, in the form of the `document.activeElement`. This library approaches the problem by moving the focus management outside of the individual elements up to a `<ControlledFocus>` top level component.

Open the [demo page](http://pirelenito.github.io/react-controlled-focus/demo.html) to see it in action.

**WARNING**: The API is nowhere near 1.0 stability and it is pretty much an experiment at this point. Appretiate any feedback if I'm doing something that doesn't make sense.

## Usage

Install the package:

```bash
npm intall --save react-controlled-focus
```

The API itself is very simple, wrap the entire application arround a `<ControlledFocus>`, set up which element should have the focus via the `activeElement` and handle changes in focus via the `onFocus` callback:

```jsx
<ControlledFocus activeElement='input-1' onFocus={}>
  // children components that will have the focus under-controll.
  <input data-focus-id='input-1'/>
</ControlledFocus>
```

The value of `activeElement` must match the name in `data-focus-id`.

## Development

For local development:

```bash
npm start
```

And open [http://0.0.0.0:3000/demo.html](http://0.0.0.0:3000/demo.html).

## Caveats

At this point there are a couple:

- The biggest caveat of the current implementation is that there can be only one `ControlledFocus` component per page;
- We still required a data attribute named `data-focus-id` on each component we wish to have focus controlled;
- Depending on `data-focus-id` makes it hard to controll the focus on components that you don't own.
