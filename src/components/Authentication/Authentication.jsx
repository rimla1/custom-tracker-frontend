import { useState } from 'react'
import Login from './Login'
import Register from './Register'

const Authentication = () => {
    const [action, setAction] = useState('Login')


    const handleLoginActionClick = () => {
        if(action !== 'Login'){
            setAction('Login')
        }
    }

    const handleRegisterActionClick = () => {
        if(action !== 'Register'){
            setAction('Register')
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
                <div className="flex justify-between mb-6">
                    <button
                        onClick={handleLoginActionClick}
                        className={`py-2 px-4 rounded ${action === 'Login' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                    >
                        Login
                    </button>
                    <button
                        onClick={handleRegisterActionClick}
                        className={`py-2 px-4 rounded ${action === 'Register' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                    >
                        Register
                    </button>
                </div>
                {action === 'Login' ? <Login /> : <Register handleLoginActionClick={handleLoginActionClick}/>}
            </div>
        </div>
    );
}

export default Authentication