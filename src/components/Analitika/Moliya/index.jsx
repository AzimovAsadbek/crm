import {Arrow, ArrowUp, Container, DateContainer, Top, Wrapper, Secton, Dot} from "./style.js";
import Title from "../../Generics/Title/index.jsx";
import useDate, {days, months} from "../../../hooks/useDate.js";
import {useContext, useEffect, useState} from "react";
import {Section} from "../style.js";
import {MoliyaContext} from "../../../context/moliya/index.jsx";

const Moliya = () => {
    const date = useDate()
    const [dateCount, setDateCount] = useState(0)
    const [day, setday] = useState(new Date())
    const [data, setData] = useState({})
    let url = import.meta.env.VITE_BASE_URL
    let [state, dispatch] = useContext(MoliyaContext);
    useEffect(() => {
        fetch(`${url}/tabs/moliya`).then(res => res.json()).then((res) => {
            const d = new Date().getDate();
            setData(res.filter(v => v.today === `${d}`)[0])
            return dispatch({
                type: "get",
                payload: res
            })
        })
    }, []);

    const clickDate = (d, v) => {
        if (date.date(dateCount)[0].getDate() === d.getDate()) {
            setDateCount(dateCount - 1)
        }
        if (date.date(dateCount)[6].getDate() === d.getDate()) {
            setDateCount(dateCount + 1)
        }
        setday(d)
        setData(v)
    }
    return <Container>
        <Top>
            <Arrow right={"true"} onClick={() => setDateCount(dateCount - 6)}/>
            <Title $font_size={14} type={"true"}>{months[day.getMonth()].full} {day.getFullYear()}</Title>
            <Arrow onClick={() => setDateCount(dateCount + 6)}/>
        </Top>

        <DateContainer>
            {
                state.map((v, i) => {
                    const d = new Date(v.day);

                    const ac = day.getDate() === d.getDate() && day.getMonth() === d.getMonth() && day.getFullYear() === d.getFullYear()
                    return <Wrapper $active={`${ac}`} key={i} onClick={() => clickDate(d, v)}>
                        <Title $font_size={12} $line_height={20}
                               color={ac ? "white" : "var(--secondaryColor)"}>{days[d.getDay()].short}</Title>
                        <Title color={ac ? "white" : ""} $font_size={14} $line_height={20}
                               type={"true"}>{d.getDate()}</Title>
                    </Wrapper>
                })
            }
        </DateContainer>
        <div>
            <Title $font_size={12} $line_height={20}
                   color={"var(--secondaryColor)"}>{day.getDate()}-{months[day.getMonth()].full} {day.getFullYear()}</Title>
            <Secton>
                <Title $font_size={32} $line_height={40} type={"bold"}>{data?.students}</Title>
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
                <Title $font_size={14} $line_height={20}>{data?.students}</Title>
            </Top>
            <Top>
                <Section>
                    <Dot/>
                    <Title $font_size={14} $line_height={20}>Darsliklar sotuvi</Title>
                </Section>
                <Title $font_size={14} $line_height={20}>{data?.video}</Title>
            </Top>
        </div>
    </Container>
}
export default Moliya