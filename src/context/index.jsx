import UserProvider from "./user/index.jsx";
import AnalyticsProvider from "./analytics/index.jsx";
import EmailProvider from "./email/index.jsx";
import MoliyaProvider from "./moliya/index.jsx";
import MediaProvider from "./media/index.jsx";
import AllLidsProvider from "./lids/index.jsx";
import GroupProvider from "./groups/index.jsx";
import RoomsProvider from "./rooms/index.jsx";

const providers = [
    UserProvider,
    AnalyticsProvider,
    EmailProvider,
    MoliyaProvider,
    MediaProvider,
    AllLidsProvider,
    GroupProvider,
    RoomsProvider,
]
const ContextProvider = ({children}) => {
    return providers.reduceRight((account, Provider) => <Provider>{account}</Provider>, children);
}
export default ContextProvider;