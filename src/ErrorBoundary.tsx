import { Component, type ErrorInfo, type ReactNode } from "react"

interface ErrorBoundaryState {
    hasError: boolean
}

interface ErrorBoundaryProps{
    children: ReactNode
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState>{
    constructor(props: ErrorBoundaryProps){
        super(props)
        this.state = {hasError: false}
    }

    static getDerivedStateFromError(): ErrorBoundaryState{
        return {hasError: true}
    }

    componenDidCatch(error: Error, errorInfo: ErrorInfo){
        console.log("Error", error)
        console.log("Error Info", errorInfo)
    }

    render () {
        if (this.state.hasError){
            return <h1>Algo salió mal</h1>
        }

        return this.props.children
    }
}

export default ErrorBoundary