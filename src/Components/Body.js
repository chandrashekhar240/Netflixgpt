
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

import Login from "./Login";
import Browse from "./Browse";
import LogInForm from "./LogInForm";
import { auth } from "../utils/Firebase";

// For users who are not logged in
const PrivateRoute = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    if (loading) return <h1>Loading...</h1>;

    return user ? children : <Navigate to="/loginform" replace />;
};

// For users who are already logged in
const PublicRoute = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    if (loading) return <h1>Loading...</h1>;

    return user ? <Navigate to="/browse" replace /> : children;
};

const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: (
                <PublicRoute>
                    <Login />
                </PublicRoute>
            ),
        },
        {
            path: "/browse",
            element: (
                <PrivateRoute>
                    <Browse />
                </PrivateRoute>
            ),
        },
        {
            path: "/loginform",
            element: (
                <PublicRoute>
                    <LogInForm />
                </PublicRoute>
            ),
        }
    ]);

    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    );
};

export default Body;
