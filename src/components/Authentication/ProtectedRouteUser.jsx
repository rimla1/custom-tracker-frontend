import Authentication from './Authentication';

const ProtectedRouteUser = ({children}) => {
    const token = localStorage.getItem('jwtToken');
    let decodedToken;
    if(token){
        decodedToken = JSON.parse(atob(token.split('.')[1]));
    }
    if(!decodedToken) return <Authentication />
    return children
}

export default ProtectedRouteUser