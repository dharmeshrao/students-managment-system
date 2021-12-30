import { Route } from "react-router-dom"

export const Private = ({children,path})=>{
    return <Route path={path}>{children}</Route>
}