import UserProvider from "./user/index.jsx";
import AnalyticsProvider from "./analytics/index.jsx";
import EmailProvider from "./email/index.jsx";
import MoliyaProvider from "./moliya/index.jsx";
import MediaProvider from "./media/index.jsx";

const providers = [
    UserProvider,
    AnalyticsProvider,
    EmailProvider,
    MoliyaProvider,
    MediaProvider,
]
const ContextProvider = ({children}) => {
    return providers.reduceRight((account, Provider) => <Provider>{account}</Provider>, children);
}
export default ContextProvider;