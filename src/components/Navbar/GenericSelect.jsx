import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { useState } from "react";


const GenericSelect = () => {
    const [language, setLanguage] = useState('uzbek');

    const handleChange = (event) => {
        setLanguage(event.target.value);
    };
    return (
        <FormControl fullWidth size="small" sx={{ width: 150, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-label">Language</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={language}
                label="Language"
                onChange={handleChange}
            >
                <MenuItem value={"uzbek"}>Uzbek</MenuItem>
                <MenuItem value={"english"}>English</MenuItem>
                <MenuItem value={"russian"}>Russian</MenuItem>
            </Select>
        </FormControl>
    )
}

export default GenericSelect
