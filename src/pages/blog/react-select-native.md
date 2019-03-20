---
title: "Using the native HTML select element (for real) in React"
date: "2018-07-02T00:00:00.000Z"
path: "/blog/react-select-native"
---

**Disclaimer: this is not a package for React Native. The name refers to the native HTML element.**

Lately in a project I wanted to make a progressive web app with a mobile-friendly UI with React. All was fine and dandy until I wanted to use native HTML form elements due to their good, integrated user experience with mobile devices.

You see, the HTML standard wasn't exactly made for handling JSON or any other structured data format. For example, our star of the day, select, [can only handle strings as values.](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select) So, what do?

Easy. Just JSON.stringify() the input and JSON.parse() the output. Right?

```jsx
class ForFun {
  render() {
    const { data } = this.props.data
    return (
      <select>
        {data.map(option => (
          <option
            value={JSON.stringify(option.value)}
            key={`option-${JSON.stringify(option)}`}
          >
            {JSON.stringify(option.label)}
          </option>
        ))}
      </select>
    )
  }
}
```

Wrong. Well, partly right. There's still more work before we can fully use the select element in React. It's a shame really that to fully use it you need to make it a stateful, separate component.

In addition to the inconvenience with handling inputs and outputs, you also need to update the view with the selected label on change, and propagate the value back to the data handler. There were [some packages](https://www.npmjs.com/package/react-select) available on npm that do just this – aiming to modernize/_reactify_ the select element.

The problem with a lot of these is that they don't use the native element, but rather approximate its behaviour with CSS + Javascript events, ending in a bloated mess of a package which results in a pre-styled drop-down menu. This, in my opinion, defeats the purpose.

After many iterations I had what the application needed. It was then I realized that I wanted to make this open source, since I couldn't find the correct package myself when I needed it. I tried to imagine all possible scenarios on how it could be used, implemented the possibilities to use it as an uncontrolled and a controlled input, and changed the class names and other identifiers to be more generic.

You can find more information on `react-select-native` in the following links:

* https://github.com/JaniAnttonen/react-select-native
* https://www.npmjs.com/package/react-select-native

The package is still in development, but be sure to test it out and tell if there's any code that's breaking your application or could need some love.
