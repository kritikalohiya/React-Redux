import React,{Component} from 'react';
import classes from './Layout.css';
import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component{
    state={
        showSideDrawer:false
    }
    sideDrawerClosedHandler=()=>{
        this.setState({        showSideDrawer:false
        });
    }

    // sideDrawerClosedHandler=()=>{
    //     this.setState({showSideDrawer: !this.state.showSideDrawer
    //     });
    // }
    // if plan to use state in setState ,we dont hv to do lyk dis in abv code,PLZ REMEMBER THE BELOW CODE.
    sideDrawerToggleHandler=()=>{
        this.setState((prevState)=>{
            return {showSideDrawer: !prevState.showSideDrawer};
            });
    }

    render(){
        return(
            <Aux>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer open={this.state.showSideDrawer}
                closed={this.sideDrawerClosedHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
            );
    }
}

export default Layout;