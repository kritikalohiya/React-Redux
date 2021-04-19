import React, { Component } from 'react';

//this fn. will use this dynamic import syntax & den give us a Promise where we eventually get the Component we wnt it to load  & where we den render this Component.
const asyncComponent = (importComponent) => {
    return class extends Component {
        state = {
            component: null
        }

        componentDidMount () {
            importComponent()
                .then(cmp => {
                    this.setState({component: cmp.default});
                });
        }
        
        render () {
            const C = this.state.component;

            return C ? <C {...this.props} /> : null;
        }
    }
}

export default asyncComponent;