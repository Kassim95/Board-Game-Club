import React from 'react';


class SignupForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            passwordConfirmation: ''
        }  
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    onSubmit(e){
        e.preventDefault();
        console.log(this.state);
    }
    render(){
        return( 
            <form onSubmit={this.onSubmit.bind(this)}>
                <h1>Join our community!</h1>
                <div className='form-group'>
                    <label className='control-label'>Email</label>
                    <input value={this.state.email} onChange={this.onChange.bind(this)} type='text' name='email' className='form-control' />
                </div>
                <div className='form-group'>
                    <label className='control-label'>Password</label>
                    <input value={this.state.password} onChange={this.onChange.bind(this)} type='password' name='password' className='form-control' />
                </div>
                <div className='form-group'>
                    <label className='control-label'>Confirm Password</label>
                    <input value={this.state.passwordConfirmation} onChange={this.onChange.bind(this)} type='password' name='passwordConfirmation' className='form-control' />
                </div>
                <div className='form-group'>
                   <button className='btn btn-primary btn-lg'>Sign up</button>
                </div>
            </form>
        )
    }
}

export default SignupForm;