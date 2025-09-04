// Icons
import call from "../assets/icons/sozlamalar/call.svg?react"
import check from "../assets/icons/sozlamalar/check.svg?react"
import filiallar from "../assets/icons/sozlamalar/filiallar.svg?react"
import sms from "../assets/icons/sozlamalar/sms.svg?react"
import sorovnoma from "../assets/icons/sozlamalar/sorovnomalar.svg?react"

// components
import Generics from "../views/Generics/index.jsx";
import CheckView from "../views/Sozlamalar/Umumiy/check.jsx";
import FiliallarView from "../views/Sozlamalar/Umumiy/filiallar.jsx";
import XabarnomaView from "../views/Sozlamalar/Umumiy/xabarnoma.jsx";
import SorovnomalarView from "../views/Sozlamalar/Umumiy/sorovnomalar.jsx";
import CallConfigView from "../views/Sozlamalar/Umumiy/callConfig.jsx";
import TolovlarView from "../views/Sozlamalar/Manager/tolovlar.jsx";
import DarajalarView from "../views/Sozlamalar/Manager/darajalar.jsx";
import KPIView from "../views/Sozlamalar/Mentor/kpi.jsx";
import OylikView from "../views/Sozlamalar/Mentor/oylik.jsx";
import KategoriyaView from "../views/Sozlamalar/Student/kategoriya.jsx";
import StudentTolovlarView from "../views/Sozlamalar/Student/tolovlar.jsx";


const umumiy = [
    {
        id: 1, title: "Check", icon: check, element: CheckView, path: "/sozlamalar/umumiy/check"
    },
    {
        id: 2, title: "Filiallar", icon: filiallar, element: FiliallarView, path: "/sozlamalar/umumiy/filiallar"
    },
    {
        id: 3, title: "Xabarnomalar", icon: sms, element: XabarnomaView, path: "/sozlamalar/umumiy/xabarnomalar"
    },
    {
        id: 4, title: "So'rovnoma", icon: sorovnoma, element: SorovnomalarView, path: "/sozlamalar/umumiy/sorovnoma"
    },
    {
        id: 5,
        title: "Raqamni belgilash",
        icon: call,
        element: CallConfigView,
        path: "/sozlamalar/umumiy/raqamni-belgilash"
    },

]


export const manager = [
    {
        id: 1, title: "To'lovlar", icon: check, element: TolovlarView, path: "/sozlamalar/manager/tolovlar"
    },
    {
        id: 2, title: "Darajalar", icon: filiallar, element: DarajalarView, path: "/sozlamalar/manager/darajalar"
    },

]
export const mentor = [
    {
        id: 1, title: "KPI", icon: check, element: KPIView, path: "/sozlamalar/mentor/kpi"
    },
    {
        id: 2, title: "Oylik", icon: filiallar, element: OylikView, path: "/sozlamalar/mentor/oylik"
    },

]
export const student = [
    {
        id: 1, title: "To'lovlar", icon: check, element: StudentTolovlarView, path: "/sozlamalar/student/tolovlar"
    },
    {
        id: 2, title: "Kategoriya", icon: filiallar, element: KategoriyaView, path: "/sozlamalar/student/kategoriya"
    },

]
export default umumiy