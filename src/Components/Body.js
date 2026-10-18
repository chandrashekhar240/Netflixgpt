import Login from './Login';
import Browse from './Browse';
import LogInForm from './LogInForm';
import { createBrowserRouter , RouterProvider} from 'react-router-dom';

const Body = () =>{
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />,
        },
        {
            path: "/Browse",
            element: <Browse />,
        },
        {
            path: "/loginform",
            element: <LogInForm/>,       
         }
    ]);

    return(
        <div>
            <RouterProvider router = {appRouter} />
        </div>
    )
}

export default Body;