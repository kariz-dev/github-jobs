import React from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

const SearchComponent = () => {
  return (
    <div className="container">
      <Form className="d-flex justify-content-between align-items-center">
        <FormGroup>
          <Label for="exampleEmail">Job Description</Label>
          <Input
            name="job"
            placeholder="Filter by title, benefits, companies, expertise"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Job Description</Label>
          <Input
            name="location"
            placeholder="Filter by city,state, zip code or country"
            type="text"
          />
        </FormGroup>
        <FormGroup check>
          <Input id="exampleCheck" name="check" type="checkbox" />
          <Label check for="exampleCheck">
            Full Time Only
          </Label>
        </FormGroup>
        <Button color="secondary">Search</Button>
      </Form>
    </div>
  );
};

export default SearchComponent;
