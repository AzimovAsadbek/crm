import {useLocation} from "react-router-dom";

const useQuery = () => {
    let location = useLocation()


    return new URLSearchParams(location?.search)
}

export default useQuery
