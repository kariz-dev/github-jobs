import React from "react";
import { FormGroup, Label, Input, Button } from "reactstrap";

const SearchComponent = () => {
  return (
    <div className="container mb-4">
      <div className="row">
        <div className="col-4">
          <FormGroup>
            <Label for="exampleEmail">Job Description</Label>
            <Input
              name="job"
              placeholder="Filter by title, benefits, companies, expertise"
              type="text"
            />
          </FormGroup>
        </div>
        <div className="col-4">
          <FormGroup>
            <Label for="exampleEmail">Location</Label>
            <Input
              name="job"
              placeholder="Filter by title, benefits, companies, expertise"
              type="text"
            />
          </FormGroup>
        </div>
        <div className="col align-self-center">
          <FormGroup check>
            <Input id="exampleCheck" name="check" type="checkbox" />
            <Label check for="exampleCheck">
              Full Time Only
            </Label>
          </FormGroup>
        </div>
        <div className="col align-self-center">
          <Button color="secondary px-5">Search</Button>
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
