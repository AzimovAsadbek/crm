import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

// function createData(name, calories, fat, carbs, protein, price) {
//     return {
//         name,
//         calories,
//         fat,
//         carbs,
//         protein,
//         price,
//         history: [
//             {
//                 date: '2020-01-05',
//                 customerId: '11091700',
//                 amount: 3,
//             },
//             {
//                 date: '2020-01-02',
//                 customerId: 'Anonymous',
//                 amount: 1,
//             },
//         ],
//     };
// }

function Row(props) {
    const {row, headCell} = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{'& > *': {borderBottom: 'unset'}}} onClick={() => setOpen(!open)}>

                {
                    headCell?.map((v) => {
                        return <TableCell component="th" scope="row">
                            {v?.render ? v.render() : row[v.id]}
                        </TableCell>
                    })
                }
            </TableRow>
            <TableRow>
                <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{margin: 1}}>
                            {/*<Typography variant="h6" gutterBottom component="div">*/}
                            {/*    History*/}
                            {/*</Typography>*/}
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Date</TableCell>
                                        <TableCell>Customer</TableCell>
                                        <TableCell align="right">Amount</TableCell>
                                        <TableCell align="right">Total price ($)</TableCell>
                                    </TableRow>
                                </TableHead>
                                {/*<TableBody>*/}
                                {/*    {row.history.map((historyRow) => (*/}
                                {/*        <TableRow key={historyRow.date}>*/}
                                {/*            <TableCell component="th" scope="row">*/}
                                {/*                {historyRow.date}*/}
                                {/*            </TableCell>*/}
                                {/*            <TableCell>{historyRow.customerId}</TableCell>*/}
                                {/*            <TableCell align="right">{historyRow.amount}</TableCell>*/}
                                {/*            <TableCell align="right">*/}
                                {/*                {Math.round(historyRow.amount * row.price * 100) / 100}*/}
                                {/*            </TableCell>*/}
                                {/*        </TableRow>*/}
                                {/*    ))}*/}
                                {/*</TableBody>*/}
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
                        <Row key={row.name} row={row} headCell={headCell}/>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

