import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import GenericSelect from "../GenericSelect/GenericSelect.jsx";
import {useNavigate} from "react-router-dom";


function EnhancedTableHead(props) {
    const {onSelectAllClick, numSelected, rowCount, headCells, checkbox} =
        props;


    return (
        <TableHead>
            <TableRow>
                {checkbox && <TableCell padding="checkbox">
                    <Checkbox
                        color="primary"
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{
                            'aria-label': 'select all desserts',
                        }}
                    />
                </TableCell>}
                {headCells.map((headCell) => (
                    <TableCell key={headCell.id} align={headCell?.align || "left"}
                               sx={{cursor: "pointer", color: "#929FAF", fontSize: 16, whiteSpace: "nowrap"}}>
                        {headCell.label}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}


export default function GenericTable(props) {
    const {headCells, rows, open, checkbox = true, url} = props;
    const [selected, setSelected] = React.useState([]);
    const navigate = useNavigate();
    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = rows.map((n) => n.id);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, id) => {
        if (checkbox) {
            const selectedIndex = selected.indexOf(id);
            let newSelected = [];

            if (selectedIndex === -1) {
                newSelected = newSelected.concat(selected, id);
            } else if (selectedIndex === 0) {
                newSelected = newSelected.concat(selected.slice(1));
            } else if (selectedIndex === selected.length - 1) {
                newSelected = newSelected.concat(selected.slice(0, -1));
            } else if (selectedIndex > 0) {
                newSelected = newSelected.concat(
                    selected.slice(0, selectedIndex),
                    selected.slice(selectedIndex + 1),
                );
            }
            setSelected(newSelected);
        } else {
            url && navigate(url, {state: {parent: "Guruhlar", child: "Checkin"}})
        }
    };

    return (
        <Box sx={{width: '100%'}}>
            <Box sx={{overflow: "hidden", height: !open ? 0 : "fit-content",}}>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell sx={{display: "flex", gap: 2, marginBottom: "10px", border: 0}}>
                                {props?.children}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Box>
            <Paper sx={{width: '100%', mb: 2}}>
                <TableContainer>
                    <Table
                        sx={{minWidth: 750}}
                        aria-labelledby="tableTitle"
                    >
                        <EnhancedTableHead
                            numSelected={selected.length}
                            onSelectAllClick={handleSelectAllClick}
                            rowCount={rows.length}
                            headCells={headCells}
                            checkbox={checkbox}

                        />
                        <TableBody>
                            {rows.map((row, index) => {
                                const isItemSelected = selected.includes(row.id);
                                const labelId = `enhanced-table-checkbox-${index}`;

                                return (
                                    <TableRow
                                        hover
                                        onClick={(event) => handleClick(event, row.id)}
                                        role="checkbox"
                                        aria-checked={isItemSelected}
                                        tabIndex={-1}
                                        key={row.id}
                                        selected={isItemSelected}
                                        sx={{cursor: 'pointer'}}
                                    >
                                        {checkbox && <TableCell padding="checkbox">
                                            <Checkbox
                                                color="primary"
                                                checked={isItemSelected}
                                                inputProps={{
                                                    'aria-labelledby': labelId,
                                                }}
                                            />
                                        </TableCell>}
                                        {
                                            headCells?.map((headCell) => {
                                                return <TableCell align={headCell?.align || "left"} component="th"
                                                                  scope={'row'}
                                                                  sx={{fontSize: 16}}
                                                                  key={headCell?.id}>{headCell?.render ? headCell.render(row) : row[headCell?.id]}</TableCell>
                                            })
                                        }

                                    </TableRow>
                                );
                            })}
                            {!rows.length && (
                                <TableRow>
                                    <TableCell colSpan={headCells.length} align={"center"}>No data</TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
}
