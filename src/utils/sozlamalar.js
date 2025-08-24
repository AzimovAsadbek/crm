// Icons
import call from "../assets/icons/sozlamalar/call.svg?react"
import check from "../assets/icons/sozlamalar/check.svg?react"
import filiallar from "../assets/icons/sozlamalar/filiallar.svg?react"
import sms from "../assets/icons/sozlamalar/sms.svg?react"
import sorovnoma from "../assets/icons/sozlamalar/sorovnomalar.svg?react"

// components
import Generics from "../views/Generics/index.jsx";
import CheckView from "../views/Sozlamalar/Umumiy/check.jsx";


const umumiy = [
    {
        id: 1, title: "Check", icon: check, element: CheckView, path: "/sozlamalar/umumiy/check"
    },
    {
        id: 1, title: "Filiallar", icon: filiallar, element: Generics, path: "/sozlamalar/umumiy/filiallar"
    },
    {
        id: 1, title: "Xabarnomalar", icon: sms, element: Generics, path: "/sozlamalar/umumiy/xabarnomalar"
    },
    {
        id: 1, title: "So'rovnoma", icon: sorovnoma, element: Generics, path: "/sozlamalar/umumiy/sorovnoma"
    },
    {
        id: 1, title: "Raqamni belgilash", icon: call, element: Generics, path: "/sozlamalar/umumiy/raqamni-belgilash"
    },

]

export default umumiy