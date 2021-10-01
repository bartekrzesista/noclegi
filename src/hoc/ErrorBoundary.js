import React from "react";

class ErrorBoundary extends React.Component {
    state = {
        hasError: false,
        error: null,
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        // console.log('Error boundary');
        // console.log(error);
        // console.log('-------------------');
        // console.log(errorInfo);
    }

    render() {
        if(this.state.hasError) {
            return (
                <div className="alert alert-danger">
                    Coś poszło nie tak ({this.state.error.toString()}).
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;