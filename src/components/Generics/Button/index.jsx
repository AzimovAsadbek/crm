import {Button, Icons} from "./style.js";

const GenericButton = (props) => {
    switch (props.type) {
        case "save":
            return <Button.Save {...props}>
                {props?.children}
            </Button.Save>
        case "import":
            return <Button.Import {...props}><Icons.Import/> {props.children}</Button.Import>
        case "add":
            return <Button.Add {...props}><Icons.Add/> {props.children}</Button.Add>
        case "next":
            return <Button.Next {...props}>{props.children} <Icons.Next/> </Button.Next>
        case "delete":
            return <Button.Delete {...props}>{props.children}</Button.Delete>
        case "filter":
            return <Button.Filter {...props}><Icons.Filter/> {props.children}</Button.Filter>
        default:
            return <Button {...props}>
                {props?.children}
            </Button>
    }
}

export default GenericButton