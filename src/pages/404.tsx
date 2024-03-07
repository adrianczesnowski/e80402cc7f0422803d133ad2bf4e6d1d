import {Link} from "react-router-dom";

function PageNotFound() {
    return (
        <>
            <h1>Page not found</h1>
            <Link to={'/home'}>Back to main page</Link>
        </>
    )
};

export default PageNotFound;