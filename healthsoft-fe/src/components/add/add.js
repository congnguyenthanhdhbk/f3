import React from "react";
import { observer } from "mobx-react";
import {Form, FormGroup, Label, Input, Row, Col, Card, CardBody, CardTitle, CardFooter, CardHeader} from "reactstrap";
import Select from "react-select";
import DatePicker from "react-datepicker";

import AddCtrl from "./add.ctrl";
import Button from "reactstrap/es/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus} from "@fortawesome/free-solid-svg-icons";

class Add extends React.Component{
    componentDidMount() {
        AddCtrl.initValue();
    }

    render() {
        const { selectedGenderValue, selectedGenderOptions, handleGenderChange,
            handleChangeBod, bod, handleSelectBod, inputMiddleName, inputLastName, inputFirstName,
            handleChangeFirstName, handleChangeLastName, handleChangeMiddleName, addPatient
        } = AddCtrl;
        return (
            <div className="container">
                <Form onSubmit={addPatient}>
                <Card>
                    <CardHeader>
                        <CardTitle>Create patient</CardTitle>
                    </CardHeader>
                    <CardBody>
                            <Row>
                                <Col>
                                    <FormGroup>
                                        <Label>First Name</Label>
                                        <Input onChange={handleChangeFirstName} placeholder="Enter First name" value={inputFirstName}/>
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup>
                                        <Label>Middle Name</Label>
                                        <Input onChange={handleChangeMiddleName} placeholder="Enter middle name" value={inputMiddleName}/>
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup>
                                        <Label>Last Name</Label>
                                        <Input onChange={handleChangeLastName} placeholder="Enter Last name" value={inputLastName}/>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <FormGroup>
                                        <Label>DOB</Label>
                                        <DatePicker
                                            selected={bod}
                                            onSelect={this.handleSelectBod}
                                            onChange={handleChangeBod}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <Label>Gender</Label>
                                    <Select
                                        onChange={handleGenderChange}
                                        options={selectedGenderOptions}
                                        value={selectedGenderValue}
                                    />
                                </Col>
                            </Row>
                    </CardBody>
                    <CardFooter>
                        <Button className="btn btn-success"><FontAwesomeIcon icon={faPlus}/> Create Patient</Button>
                    </CardFooter>

                </Card>
            </Form>
            </div>
        );
    }
}

export default observer(Add)
