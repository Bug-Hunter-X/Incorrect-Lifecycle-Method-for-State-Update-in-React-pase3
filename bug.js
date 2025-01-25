This React component uses the wrong lifecycle method to update the state. `componentWillMount` is deprecated and will not trigger updates as expected in newer React versions.  It should use `useEffect` for side effects that cause updates.