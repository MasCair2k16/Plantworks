import React, { useEffect } from 'react';
// import { firestore } from "../firebase"
// import {
//   BrowserRouter,
//   Switch,
//   Route,
// } from "react-router-dom";
import { handleFetchPosts } from '../lib/PlantForm';

function NewPlant() {
    return (
        <div>
            <form onSubmit={handleFetchPosts}>
                <label>
                    Plant Name:
                    <input type="text" name="name" />
                </label>
                <label>
                    Plant Type:
                    <input type="text" name="type" />
                </label>
                <label>
                    Plant Description:
                    <input type="text" name="description" />
                </label>
                <label>
                    Plant Image:
                    <input type="text" name="image" />
                </label>
                <label>
                    Plant Water Frequency:
                    <select type="text" name="waterFrequency">
                        <option value="daily">Daily</option>
                        <option value="weekly">Weekly</option>
                        <option value="weekly">Bi-Weekly</option>
                        <option value="monthly">Monthly</option>
                    </select>
                </label>
                <label>
                    Plant Shade:
                    <select type="text" name="shade">
                        <option value="full sun">Full Sun</option>
                        <option value="partial shade">Partial Shade</option>
                        <option value="partial sun">Partial Sun</option>
                    </select>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default NewPlant;
