import {Arrow, ArrowUp, Container, DateContainer, Top, Wrapper, Secton, Dot} from "./style.js";
import Title from "../../Generics/Title/index.jsx";
import useDate, {days, months} from "../../../hooks/useDate.js";
import {useState} from "react";
import {Section} from "../style.js";

const Moliya = () => {
    const date = useDate()
    const [dateCount, setDateCount] = useState(0)
    const [day, setday] = useState(new Date())

    const clickDate = (d) => {
        if (date.date(dateCount)[0].getDate() === d.getDate()) {
            setDateCount(dateCount - 1)
        }
        if (date.date(dateCount)[6].getDate() === d.getDate()) {
            setDateCount(dateCount + 1)
        }
        setday(d)
    }
    return <Container>
        <Top>
            <Arrow right={"true"} onClick={() => setDateCount(dateCount - 6)}/>
            <Title $font_size={14} type={"true"}>{months[day.getMonth()].full} {day.getFullYear()}</Title>
            <Arrow onClick={() => setDateCount(dateCount + 6)}/>
        </Top>

        <DateContainer>
            {
                date?.date(dateCount).map((v, i) => {
                    const ac = day.getDate() === v.getDate() && day.getMonth() === v.getMonth() && day.getFullYear() === v.getFullYear()
                    return <Wrapper $active={`${ac}`} key={i} onClick={() => clickDate(v)}>
                        <Title $font_size={12} $line_height={20}
                               color={ac ? "white" : "var(--secondaryColor)"}>{days[v.getDay()].short}</Title>
                        <Title color={ac ? "white" : ""} $font_size={14} $line_height={20}
                               type={"true"}>{v.getDate()}</Title>
                    </Wrapper>
                })
            }
        </DateContainer>
        <div>
            <Title $font_size={12} $line_height={20}
                   color={"var(--secondaryColor)"}>{day.getDate()}-{months[day.getMonth()].full} {day.getFullYear()}</Title>
            <Secton>
                <Title $font_size={32} $line_height={40} type={"bold"}>8 520 000</Title>
                <ArrowUp/>
                <Title $font_size={24} $line_height={32} color={"#52C41A"}>+22%</Title>
            </Secton>
        </div>
        <div>
            <Top>
                <Section>
                    <Dot $first={`true`}/>
                    <Title $font_size={14} $line_height={20}>Talabalar</Title>
                </Section>
                <Title $font_size={14} $line_height={20}>5 760 000</Title>
            </Top>
            <Top>
                <Section>
                    <Dot/>
                    <Title $font_size={14} $line_height={20}>Darsliklar sotuvi</Title>
                </Section>
                <Title $font_size={14} $line_height={20}>2 180 000</Title>
            </Top>
        </div>
    </Container>
}
export default Moliya