import React, { useEffect } from 'react';
import { firestore } from "../firebase"
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import PlantForm from '../lib/PlantForm';

function NewPlant() {

    return (
        <div>
            <h1>New Plant</h1>
            <PlantForm/>
        </div>
    )
}

export default NewPlant;
