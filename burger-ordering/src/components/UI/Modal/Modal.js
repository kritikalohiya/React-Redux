import React, { Component } from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/Aux/Aux.js';
import BackDrop from '../BackDrop/BackDrop';

class Modal extends Component {
    //IT WILL HLP US TO NOT UPDATE THE ORDERSUMMARY USELESSLY , jb ordernow pe click hoga to purchasing true hogi den vo compare krega ,mismatch hote hi render hoga.
    //we also chck the children,cz modal me(in burgerbuilder.js) if loading:T hua to vo spinner show krega vrna ordersummary.
    shouldComponentUpdate = (nxtProps, nxtState) => {
        return nxtProps.show !== this.props.show || nxtProps.children !== this.props.children;
    }
    componentWillUpdate = () => {
        console.log('[modal.js] willUpadte')
    }
    render() {
        return (
            <Aux>
                <BackDrop show={this.props.show} clicked={this.props.modalClosed} />
                <div
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}
                >
                    {this.props.children}
                </div>
            </Aux>
        );
    }
}
export default Modal;