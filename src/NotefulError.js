import React from 'react';

class NotefulError extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hasError: false,
            message: ''
        }
    }

    static getDerivedStateFromError(error){
        return {hasError: true, message: error.message};
    }

    render(){
        if (this.state.hasError){
            return (<div>
                <h2>Something went wrong, please try again later.{this.state.message}</h2>
                <button onClick={()=>{window.location.replace('/');}}>Reload</button>
            </div>
            
            )
        }
        return this.props.children;
    }
}

export default NotefulError;