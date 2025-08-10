import {emailData} from "../../../mock/email";
import {Container, Img, Section, Title} from "./style";
import {Info} from "./style";

const Email = () => {
    return (
        <Container>
            {emailData.map((v) => {
                return (
                    <Info key={v.id}>
                        <Section>
                            <Img src={v.src}/>
                            <div>
                                <Title $font_size={14}>{v.name}</Title>
                                <Title $font_size={12} color="var(--secondaryColor)">
                                    {v.status}
                                </Title>
                            </div>
                        </Section>
                        <Section>
                            <div>
                                <Title>{v.msg}</Title>
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
