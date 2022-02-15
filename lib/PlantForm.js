function PlantForm() {

    const handleFetchPosts = async (event) => {
       event.preventDefault(); // submit without reloading the page

       const form = new FormData(event.target);
       const formData = Object.fromEntries(form.entries());
       
       console.log(formData);

       const res = await fetch('/api/plants', {
           body: JSON.stringify(formData),
           headers: {'content-type': 'application/json',},
           method: 'POST',
       });

       res.status !== 200 && console.log('Error: ' + res.statusText + ' ' + res.statusMessage)

       const result = await res.json();
       console.log(result);
    }

    return (
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
    );
}

export default PlantForm;
