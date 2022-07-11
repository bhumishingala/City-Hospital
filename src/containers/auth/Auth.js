import React from 'react';
import { Form ,FormGroup,Label,Input ,FormGroup,Button} from 'reactstrap';

function Auth(props) {
    return (
        <Form inline>
            <FormGroup>
                <Label
                    for="exampleEmail"
                    hidden
                >
                    Email
                </Label>
                <Input
                    id="exampleEmail"
                    name="email"
                    placeholder="Email"
                    type="email"
                />
            </FormGroup>
            {' '}
            <FormGroup>
                <Label
                    for="examplePassword"
                    hidden
                >
                    Password
                </Label>
                <Input
                    id="examplePassword"
                    name="password"
                    placeholder="Password"
                    type="password"
                />
            </FormGroup>
            {' '}
            <Button>
                Submit
            </Button>
        </Form>
    );
}

export default Auth;