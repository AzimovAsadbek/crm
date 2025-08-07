import { Navigate, Route, Routes } from "react-router-dom"
import Generics from "../views/Generics"
import sidebar from "../utils/sidebar"
import Sidebar from "../components/Sidebar"


const Root = () => {
    return (
        <Routes >
            <Route element={<Sidebar />}>

                {sidebar.map(parent => {
                    const Element = parent.element
                    if (parent?.children?.length) {
                        return parent.children.map(child => {
                            const Element = child.element
                            return <Route path={child.path} element={<Element />} key={child.id} />
                        })
                    }
                    return !parent.hiddin && <Route path={parent.path} element={<Element />} />
                })}
            </Route>
            {
                sidebar.map(parent => {
                    const Element = parent.element
                    return <Route path={parent.path} element={<Element />} key={parent.id} />
                })
            }
            <Route path="/" element={<Navigate to={"/analitika"} />} />
            <Route path="*" element={<h1>Not Found</h1>} key={parent?.id} />
        </Routes>
    )
}

export default Root
