import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Title from "../../../Generics/Title/index.jsx";
import {Dot, Section, TimelineWrapper, Wrapper} from "./style.js";
import {Icons} from "../style.js";


function Row(props) {
    const {row, headCell} = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{'& > *': {borderBottom: 'unset'}}} onClick={() => setOpen(!open)}>

                {
                    headCell?.map((v) => {
                        return <TableCell component="th" scope="row"
                                          sx={{cursor: 'pointer', color: "#253E5F", fontSize: "16px", fontWeight: 600}}
                                          key={v.id}>
                            {v?.render ? v.render() : row[v.id]}
                        </TableCell>
                    })
                }
            </TableRow>
            <TableRow>
                <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{margin: 1}}>

                            <Table size="small" aria-label="purchases">

                                <TableBody>
                                    {row?.groups?.map((rw) => {
                                            return <TableRow key={rw.id} sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                border: "1px solid #F0F0F0",
                                                margin: "8px",
                                                padding: "10px",
                                                borderRadius: "8px"
                                            }}>
                                                <TableCell sx={{flex: 1, border: 0}}>
                                                    <Wrapper>
                                                        <Title>{rw?.level}</Title>
                                                        <Section>

                                                            <Dot color={rw?.started ? "#52C41A" : "#FAAD14"}/>
                                                            <Title
                                                                $font_size={14}
                                                                $line_height={20}
                                                                type={"bold"}
                                                                color={rw?.started ? "#52C41A" : "#FAAD14"}>
                                                                {rw?.started ? "Active" : "Soon"}</Title>
                                                        </Section>
                                                    </Wrapper>
                                                </TableCell>
                                                <TableCell sx={{flex: 2, border: 0}}>
                                                    <Wrapper>
                                                        <Title $line_height={24}>{rw?.filial}</Title>
                                                        <Title color={"#1890FF"} $line_height={24}>{rw?.location}</Title>
                                                    </Wrapper>
                                                </TableCell>
                                                <TableCell sx={{flex: 2, border: 0}}>
                                                    <Wrapper>
                                                        <TimelineWrapper $bgcolor={"#1890FF"} $mb={"8px"}>
                                                            {rw?.timeline}
                                                        </TimelineWrapper>
                                                        <TimelineWrapper $bgcolor={"#91D5FF"}>
                                                            {rw?.time}
                                                        </TimelineWrapper>
                                                    </Wrapper>
                                                </TableCell>
                                                <TableCell sx={{flex: 1, border: 0}}>
                                                    <Wrapper>
                                                        <Title $line_height={20}>O'qituvchilar</Title>
                                                        <Title color={"#929FAF"}
                                                               $line_height={24} $ml={75}>{rw?.students?.length}+</Title>
                                                    </Wrapper>
                                                </TableCell>
                                                <TableCell align={"right"} sx={{border: 0}}>
                                                    <Icons.Edit/>
                                                </TableCell>
                                            </TableRow>
                                        }
                                    )}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}


export default function CollapsibleTable({headCell, rows}) {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        {headCell.map((headCell) => (
                            <TableCell key={headCell.id} align={headCell?.align || "left"}
                                       sx={{cursor: "pointer", color: "#929FAF", fontSize: 16, whiteSpace: "nowrap"}}>
                                {headCell.label}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <Row key={row.id} row={row} headCell={headCell}/>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

