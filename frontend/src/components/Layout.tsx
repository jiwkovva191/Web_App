import { Outlet } from "react-router"
import { Naviagtion } from "./Navigarion"

export const Layout = () =>{
    return(
        <div>
            <Naviagtion/>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}