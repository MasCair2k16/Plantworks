import React, { useEffect } from 'react';
// import { firestore } from "../firebase"
// import {
//   BrowserRouter,
//   Switch,
//   Route,
// } from "react-router-dom";
import {Form, Button} from 'react-bootstrap';
import { handleFetchPosts } from '../lib/PlantForm';
import style from '../styles/newPlant.module.css';

function NewPlant() {
    return (
        <div>
            <Form onSubmit={handleFetchPosts} className={style.grid}>
            <Form.Group className="mb-2">
                <Form.Label>Plant Name</Form.Label>
                <Form.Control type="text" name="name" placeholder="name" />
            </Form.Group>
            <Form.Group className="mb-2">
                <Form.Label>Plant Type</Form.Label>
                <Form.Control type="text" name="type" placeholder="type" />
            </Form.Group>
            <Form.Group className="mb-2">
                <Form.Label>Plant Description</Form.Label>
                <Form.Control type="text" name="description" placeholder="description" />
            </Form.Group>
            <Form.Group className="mb-2">
                <Form.Label>Plant Image</Form.Label>
                <Form.Control type="text" name="image" placeholder="image" />
            </Form.Group>
            <Form.Group className="mb-2">
                <Form.Label>Plant Water Frequency</Form.Label>
                <Form.Select type="text" name="waterFrequency" placeholder="water frequency" aria-label="Default select example" >
                    <option>Open this select menu</option>
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="weekly">Bi-Weekly</option>
                    <option value="monthly">Monthly</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-2">
                <Form.Label>Plant Shade</Form.Label>
                <Form.Select type="text" name="shade" aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="full sun">Full Sun</option>
                    <option value="partial shade">Partial Shade</option>
                    <option value="partial sun">Partial Sun</option>
                </Form.Select>
            </Form.Group>
                <Button variant="success" type="submit">Submit</Button>
            </Form>
        </div>
    );
}

export default NewPlant;
