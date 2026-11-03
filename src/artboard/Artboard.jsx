import { Component } from 'react';
import { ArtboardLogic } from './artboardLogic.js';
import render from './template.jsx';
import '../styles/artboard.css';

// Default settings from the prototype's component props.
const DEFAULTS = { startView: '1 · Masthead', showFinal: false, parallax: 1 };

// Hosts the artboard: owns one ArtboardLogic instance, forwards lifecycle calls to it and renders the markup
// with the values it returns.
export default class Artboard extends Component {
  constructor(props) {
    super(props);
    this.state = { tick: 0 };
    this.logic = new ArtboardLogic(this.logicProps());
    this.logic.host = this;
  }
  logicProps() {
    const { children, ...rest } = this.props;
    return { ...DEFAULTS, ...rest };
  }
  refresh(callback) {
    this.setState((s) => ({ tick: s.tick + 1 }), callback);
  }
  componentDidMount() {
    try { this.logic.componentDidMount(); } catch (e) { console.error(e); }
  }
  componentDidUpdate(prevProps) {
    this.logic.props = this.logicProps();
    try { this.logic.componentDidUpdate({ ...DEFAULTS, ...prevProps }); } catch (e) { console.error(e); }
  }
  componentWillUnmount() {
    this.logic.host = null;
    try { this.logic.componentWillUnmount(); } catch (e) { console.error(e); }
  }
  render() {
    this.logic.props = this.logicProps();
    const v = { ...this.logic.props, ...this.logic.renderVals() };
    return <div className="sc-host">{render(v)}</div>;
  }
}
