import React from 'react';
import SingupForm from './SignupForm';

class SignupPage extends React.Component{
    render(){
        return( 
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4 col-md-offset-4'>
                        <SingupForm />
                    </div>
                </div>
            </div>
        )
    }
}

export default SignupPage;