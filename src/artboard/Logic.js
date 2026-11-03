// Base class for the artboard's behaviour. State updates are applied synchronously (this.state is current right
// after setState) and then re-render the host, which is how the prototype's runtime worked and what the logic expects.
export class Logic {
  constructor(props) {
    this.props = props || {};
    this.state = {};
    this.host = null;
  }
  setState(update, callback) {
    const next = typeof update === 'function' ? update(this.state) : update;
    this.state = { ...this.state, ...next };
    if (this.host) this.host.refresh(callback);
  }
  forceUpdate() { if (this.host) this.host.refresh(); }
  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}
  renderVals() { return {}; }
}
