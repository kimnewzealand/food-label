import React, { Component } from "react"

import { Button } from 'react-bootstrap';

class AddFood extends Component {
  render() {
    return (
        <>
            <h2> Add a new food:</h2>
            <form action="/foods" method="POST">
                <input type="text" placeholder="foodgroup" name="foodgroup"/>
                <input type="text" placeholder="name" name="name"/>
                <Button variant="primary" size="lg" active type="submit">
                    Submit
                </Button>
            </form>
        </>
    )
  }
}

export default AddFood
