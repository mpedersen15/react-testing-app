import React, { Component } from 'react';
import { connect } from 'react-redux';

export default ChildComponent => {
    class ComposedComponent extends Component {
        checkForAuthentication() {
            if (!this.props.auth) {
                this.props.history.push('/');
            }
        }
    
        componentDidMount() {
            this.checkForAuthentication();
        }
    
        componentDidUpdate() {
            this.checkForAuthentication();
        }

        render() {
            return <ChildComponent {...this.props} />;
        }

    }

    function mapStateToProps(state) {
        return { auth: state.auth };
    } 

    return connect(mapStateToProps)(ComposedComponent);
}
