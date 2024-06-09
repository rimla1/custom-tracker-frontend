import { useRouteError } from 'react-router-dom';

const Error = () => {
    const err = useRouteError()

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-red-50 text-red-800">
            <h1 className="text-4xl font-bold mb-4">Oops! Something Went Wrong!</h1>
            <h1 className="text-2xl mb-4">Something went wrong, but I know you are not tilted!</h1>
            <p className="text-lg">You've lost 20 games in a row, what is one error?</p>
            <p className="text-lg">Status: {err?.status}</p>
        </div>
    );
}

export default Error;
