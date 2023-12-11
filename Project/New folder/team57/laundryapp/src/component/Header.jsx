import {Alert,Container} from "react-bootstrap";
export function Header(props){
    return(
        <Container className="mt-5">
            <Alert variant="sucess">
            <h6>{props.text}</h6>
            </Alert>
        </Container>
    );
}