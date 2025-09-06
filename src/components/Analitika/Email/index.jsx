import {emailData} from "../../../mock/email";
import {Container, Img, Section, Title} from "./style";
import {Info} from "./style";
import {useContext, useEffect} from "react";
import {AnalyticsContext} from "../../../context/analytics/index.jsx";
import {EmailContext} from "../../../context/email/index.jsx";

const Email = () => {
    let url = import.meta.env.VITE_BASE_URL
    let [state, dispatch] = useContext(EmailContext);
    useEffect(() => {
        fetch(`${url}/tabs/emails`).then(res => res.json()).then((res) => dispatch({
            type: "get",
            payload: res
        }))
    }, []);
    return (
        <Container>
            {state.map((v) => {
                return (
                    <Info key={v.id}>
                        <Section>
                            <Img src={v.src}/>
                            <div>
                                <Title $font_size={14}>{v?.surname} {v.name}</Title>
                                <Title $font_size={12} color="var(--secondaryColor)">
                                    {v.title}
                                </Title>
                            </div>
                        </Section>
                        <Section>
                            <div>
                                <Title>{v.sms}</Title>
                            </div>
                        </Section>
                        <Section end="true">
                            <Title $font_size={14} color="var(--secondaryColor)">
                                {v.date}
                            </Title>
                        </Section>
                    </Info>
                );
            })}
        </Container>
    );
};

export default Email;
