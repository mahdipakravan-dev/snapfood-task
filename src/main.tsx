import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux';
import store from "./store";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {RestaurantPage} from "./pages/restaurant.tsx";
import "./assets/styles/index.scss"

const router = createBrowserRouter([
    {
        path : "/restaurants",
        element : <RestaurantPage/>
    }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
)
