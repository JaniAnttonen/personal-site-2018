---
title: "Using the HTML select element in React in 2018"
date: "2018-07-02T00:00:00.000Z"
path: "/blog/react-select-native"
---

Lately in a project I wanted to make a progressive web app with a mobile-friendly UI with React. All was fine and dandy until I wanted to use native HTML form elements due to their good, integrated user experience with mobile devices.

You see, the HTML standard wasn't exactly made for handling JSON or any other structured data format. For example, our star of the day, select, can only handle strings as values. Easy. Just JSON.stringify() the input and JSON.parse() the output. Right?

```jsx
class ForFun {
  render() {
    const { data } = this.props.data
    return (
      <select>
        {data.map(option => (
          <option
            value={JSON.stringify(option)}
            key={`option-${JSON.stringify(option)}`}
          >
            {JSON.stringify(option)}
          </option>
        ))}
      </select>
    )
  }
}
```

Wrong. Well, partly right. There's still more work before we can fully use the select element in React.
