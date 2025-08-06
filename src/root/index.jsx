import { Route, Routes } from "react-router-dom"
import Generics from "../views/Generics"
import sidebar from "../utils/sidebar"


const Root = () => {
    return (
        <Routes >
            {sidebar.map(parent => {
                const Element = parent.element
                if (parent?.children?.length) {
                    return parent.children.map(child => {
                        const Element = child.element
                        return <Route path={child.path} element={<Element />} key={child.id} />
                    })
                }
                return <Route path={parent.path} element={<Element />} />
            })}
            <Route path="*" element={<h1>Not Found</h1>} key={parent?.id} />
        </Routes>
    )
}

export default Root
