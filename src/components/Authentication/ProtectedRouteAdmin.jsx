import Authentication from './Authentication';
const ProtectedRouteAdmin = ({children}) => {
    const token = localStorage.getItem('jwtToken');
    let decodedToken;
    if(token){
        decodedToken = JSON.parse(atob(token.split('.')[1]));
    }
    if(decodedToken.role !== 'admin') return <Authentication />
    return children
}

export default ProtectedRouteAdmin