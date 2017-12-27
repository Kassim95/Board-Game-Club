import React from 'react';
import SingupForm from './SignupForm';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userSignupRequest } from '../../actions/signupActions';

class SignupPage extends React.Component{
    render(){
        const { userSignupRequest } = this.props;
        return( 
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4 col-md-offset-4'>
                        <SingupForm userSignupRequest={userSignupRequest} />
                    </div>
                </div>
            </div>
        )
    }
}

SignupPage.propTypes = {
    userSignupRequest: PropTypes.func.isRequired
}
export default connect(null, { userSignupRequest }) (SignupPage);