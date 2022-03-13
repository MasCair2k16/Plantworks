import React, { useState, useEffect } from 'react';
import imageToBase64 from 'image-to-base64/browser';
import {Form, Button, Alert} from 'react-bootstrap';
import Style from '../styles/NewPlant.module.css';
import NavigationBar from '../components/NavigationBar'

function NewPlant() {

    const [alert, setAlert] = useState(false)
    const [response, setResponse] = useState('200')
    const [selectedFile, setSelectedFile] = useState(null)

    useEffect(() => {
        console.log("RESPONSE CODE", response);
    }, [alert, response])

    const handleFetchPosts = async (event) => {

        event.preventDefault(); // submit without reloading the page
        const form = new FormData(event.target);
        const formData = Object.fromEntries(form.entries());
        formData = {...formData, image: selectedFile}
        console.log(formData);
        let url = `${process.env.NEXT_PUBLIC_API_URL}/api/plants`;
    
        if (location.hostname === "localhost" || location.hostname === "127.0.0.1")
            url = '/api/plants';
    
        const res = await fetch(url, {
            body: JSON.stringify(formData),
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json',
                'access-control-allow-methods': 'POST, GET, OPTIONS, PUT, DELETE',
                'access-control-allow-origin': '*',
            },
            method: 'POST',
        });

        setAlert(true);
        
        if (res.status !== 200) {
            console.log('Error: ' + res.statusText);
        }

        setResponse(res.status)
        const result = await res.json();
        console.log(result);
        document.body.scrollTop = 0;
    }

    /**
     * 
     * @param {*} e - event target of image element
     */
    const onImageChange = e => {
        if (e.target.files && e.target.files[0]) {
            let img = e.target.files[0]
            imageToBase64(img)
            .then((data) => {
                setSelectedFile(data)
                console.log(data)
            }).catch((error) => {
                console.log(error)}
            )
        }
    }

    return (
        <div className={Style.container}>
            <NavigationBar />
            <div className={Style.footer}>
                {alert && <Alert variant={response === 200 ? 'success' : 'danger'} style={{marginBottom: '0'}}>
                    {response === 200 ? "You've successfully created a new plant!" : 'There seems to be a problem, please try again later' }
                </Alert>
                }
                <Form onSubmit={handleFetchPosts} className={Style.grid}>
                    <div className={Style.header}>
                        <h1>Add a Plant</h1>
                        <span>Thank you! You&apos;re helping many others care for their little green friends!</span>
                    </div>
                    <hr />
                    <Form.Group className="mb-2">
                        <Form.Label>Plant Name</Form.Label>
                        <Form.Control type="text" name="name" placeholder="name" required />
                    </Form.Group>
                    <Form.Group className="mb-2">
                        <Form.Label>Plant Type</Form.Label>
                        <Form.Control type="text" name="type" placeholder="type" required />
                    </Form.Group>
                    <Form.Group className="mb-2">
                        <Form.Label>Plant Description</Form.Label>
                        <Form.Control type="text" name="description" placeholder="description" required />
                    </Form.Group>
                    <Form.Group className="mb-2">
                        <Form.Label>Plant Image</Form.Label>
                        <Form.Control type="file" onChange={onImageChange} name="image" placeholder="image" required />
                    </Form.Group>
                    <Form.Group className="mb-2">
                        <Form.Label>Plant Water Frequency</Form.Label>
                        <Form.Select type="text" name="waterFrequency" placeholder="water frequency" aria-label="Default select example" required>
                            <option>Open this select menu</option>
                            <option value="daily">Daily</option>
                            <option value="weekly">Weekly</option>
                            <option value="weekly">Bi-Weekly</option>
                            <option value="monthly">Monthly</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-2">
                        <Form.Label>Plant Shade</Form.Label>
                        <Form.Select type="text" name="shade" aria-label="Default select example" required>
                            <option>Open this select menu</option>
                            <option value="full sun">Full Sun</option>
                            <option value="partial shade">Partial Shade</option>
                            <option value="partial sun">Partial Sun</option>
                        </Form.Select>
                    </Form.Group>
                    <Button variant="success" type="submit" className={Style.submitBtn}>Submit</Button>
                </Form>
            </div>
        </div>
    );
}

export default NewPlant;
