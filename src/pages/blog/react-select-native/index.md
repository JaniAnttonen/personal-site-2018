---
title: "Using the native HTML select element (for real) in React"
date: "2018-07-02T00:00:00.000Z"
path: "/blog/react-select-native"
---

Lately in a project I wanted to make a progressive web app with a mobile-friendly UI with React. All was fine and dandy until I wanted to use native HTML form elements due to their good, integrated user experience with mobile devices.

You see, the HTML standard wasn't exactly made for handling JSON or any other structured data format. For example, our star of the day, select, can only handle strings as values.

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

In addition to the inconvenience with handling inputs and outputs, you also need to update the view with the selected label on change, and propagate the value back to the data handler.
