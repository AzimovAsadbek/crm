import {Navigate, Route, Routes} from "react-router-dom"
import Generics from "../views/Generics"
import sidebar from "../utils/sidebar"
import Sidebar from "../components/Sidebar"
import CheckIn from "../components/Groups/Groups/checkIn.jsx";
import UmumiySozlamalar from "../components/Sozlamalar/Umumiy/index.jsx";
import umumiy from "../utils/sozlamalar.js";


const Root = () => {
    return (
        <Routes>
            <Route element={<Sidebar/>}>
                <Route element={<UmumiySozlamalar/>}>
                    <Route path="/sozlamalar/umumiy"
                           element={<Navigate state={{parent: "Sozlamalar", child: "Umumiy Sozlamalar"}}
                                              to={"/sozlamalar/umumiy/check"}/>}/>

                    {umumiy.map(v => {
                        const Element = v.element;

                        return <Route element={<Element/>} key={v.path} path={v.path}/>
                    })}
                </Route>
                <Route path={"/guruhlar/guruhlar/checkin"} element={<CheckIn/>}/>
                {sidebar.map(parent => {
                    const Element = parent.element
                    if (parent?.children?.length) {
                        return parent.children.map(child => {
                            const Element = child.element
                            return <Route path={child.path} element={<Element/>} key={child.id}/>
                        })
                    }
                    return !parent.hiddin && <Route path={parent.path} element={<Element/>}/>
                })}
            </Route>
            {
                sidebar.map(parent => {
                    const Element = parent.element
                    return <Route path={parent.path} element={<Element/>} key={parent.id}/>
                })
            }
            <Route path="/" element={<Navigate to={"/analitika"}/>}/>
            <Route path="*" element={<h1>Not Found</h1>} key={parent?.id}/>
        </Routes>
    )
}

export default Root
