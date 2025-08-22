import * as React from 'react';
import {useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];


function getStyles(name, personName, theme) {
    return {
        fontWeight: personName.includes(name)
            ? theme.typography.fontWeightMedium
            : theme.typography.fontWeightRegular,
    };
}

export default function MultipleSelect({data}) {
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event) => {

        const {
            target: {value},
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    return (
        <Select

            sx={{width: '100%', height: "40px",}}
            size={'small'}
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            value={personName}
            onChange={handleChange}
            input={<OutlinedInput id="select-multiple-chip"/>}
            renderValue={(selected) => (
                <Box sx={{
                    display: 'flex',
                    gap: 0.5,
                    overflowX: "auto",
                    maxWidth: 450,
                    "&::-webkit-scrollbar": {display: "none"}

                }}>
                    {selected.map((value) => (
                        <Chip key={value} label={value}
                              sx={{backgroundColor: "#1890FF", color: "white", height: "fit-content"}}/>
                    ))}
                </Box>
            )}
            MenuProps={MenuProps}
            variant={"outlined"}>
            {names.map((full) => {
                    return <MenuItem
                        key={full}
                        value={full}
                        style={getStyles(full, personName, theme)}
                    >
                        {full}
                    </MenuItem>
                }
            )}
        </Select>
    );
}
