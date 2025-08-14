import {FormControl, MenuItem, Select} from "@mui/material"
import {useState} from "react";


const GenericSelect = ({data, value, width}) => {
    const [defaultVal, setDefaultVal] = useState(value || (data?.length && data[0]?.value) || "");

    const handleChange = (event) => {
        setDefaultVal(event.target.value);
    };
    return (
        <FormControl fullWidth size="small" sx={{width: "100%", maxWidth: width && width, minWidth: 120}}>
            <Select
                id="demo-simple-select"
                value={defaultVal}
                onChange={handleChange}
                sx={{color: "var(--primaryColor)", border: "1px solid #F0F0F0", fontSize: 14}}
                variant={"outlined"}
            >
                {data?.map((item) => {
                    return <MenuItem key={item?.value} value={item?.value}>{item?.title}</MenuItem>
                })}
            </Select>
        </FormControl>
    )
}

export default GenericSelect
