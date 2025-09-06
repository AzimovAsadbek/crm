import privateData, {media} from "../../utils/analitics";
import Title from "../Generics/Title";
import Email from "./Email";
import {
    ArrowIcon,
    Card,
    Container,
    Count,
    Footer,
    Fragment,
    Plus,
    Section,
    SubCard,
    Wrapper,
} from "./style";
import Moliya from "./Moliya/index.jsx";
import {useContext, useEffect} from "react";
import {AnalyticsContext} from "../../context/analytics/index.jsx";
import {MediaContext} from "../../context/media/index.jsx";
import {EmailContext} from "../../context/email/index.jsx";

const Analitika = () => {
    let url = import.meta.env.VITE_BASE_URL
    let [state, dispatch] = useContext(AnalyticsContext);
    let [mediaState, mediaDispatch] = useContext(MediaContext);
    let [email] = useContext(EmailContext)
    const getAnalytics = () => {
        fetch(`${url}/tabs/analytics_page`).then(res => res.json()).then(([res]) => dispatch({
            type: "get",
            payload: res
        }))
    }

    const getMedia = () => {
        fetch(`${url}/tabs/media`).then(res => res.json()).then((res) => mediaDispatch({
            type: "get",
            payload: res
        }))
    }
    useEffect(() => {
        getAnalytics()
        getMedia()
    }, []);
    return (
        <Container>
            <div>
                <Title $pt={19} $mb={16} type={"bold"} $font_size={20}>
                    Analitika
                </Title>
                <Wrapper>
                    {privateData.map((v) => {
                        const {icon: Icon} = v;
                        const {img: Img} = v;
                        return (
                            <Card key={v.id} title={v.title}>
                                <Section>
                                    <Title type="true" $font_size={20}>
                                        <Icon className="icon"/>
                                        {v.title}
                                    </Title>
                                    <Plus title={v.title}/>
                                </Section>
                                <Section>
                                    <Title type="true" $font_size={40}>
                                        <ArrowIcon/>
                                        {state[v.count] || ""}
                                    </Title>
                                    <Img/>
                                </Section>
                            </Card>
                        );
                    })}
                </Wrapper>
            </div>
            <div>
                <Title $mb={16}>Ijtimoiy tarmoqlar</Title>
                <Wrapper>
                    {mediaState?.map((v, i) => {
                        const Icon = media[i];
                        return (
                            <SubCard key={v.id}>
                                <Section>
                                    <Title $font_size={16}>
                                        <Icon className="subIcon"/>
                                        {v.title}
                                    </Title>
                                </Section>
                                <Section>
                                    <Title color="#52C41A" $font_size={24}>
                                        <ArrowIcon child="true"/>
                                        +22%
                                    </Title>
                                    <Title type="true" $font_size={38}>
                                        {(v.subscribers / 1000).toFixed(1)}k
                                    </Title>
                                </Section>
                            </SubCard>
                        );
                    })}
                </Wrapper>
            </div>
            <Footer>
                <Fragment title="email">
                    <Title $font_size={16}>
                        Email habarlari <Count>{email.length}</Count>
                    </Title>
                    <Email/>
                </Fragment>
                <Fragment>
                    <Title $font_size={16}>Moliy</Title>
                    <Moliya/>
                </Fragment>
            </Footer>
        </Container>
    );
};

export default Analitika;
