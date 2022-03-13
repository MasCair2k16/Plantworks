import React, { useState, useEffect } from 'react';
import { Form, ListGroup } from 'react-bootstrap';
import NavigationBar from '../components/NavigationBar'
import Style from '../styles/SearchPlant.module.css';
import Image from 'next/image';

function SearchPlant() {

    const [hits, setHits] = useState([]);

    const Search = async (event) => {
        const q = event.target.value;
    
        if (q.length > 2) {
          const params = new URLSearchParams({ q });

          let url = `${process.env.NEXT_PUBLIC_API_URL}api/search?`;
          let urlIndex = `${process.env.NEXT_PUBLIC_API_URL}api/createIndex`;

          if (location.hostname === "localhost" || location.hostname === "127.0.0.1")
              url = '/api/search?';
              urlIndex = '/api/creatIndex';
          
          // TODO: check if sessions storage has called API INDEX!
          try {
            const indexRes = await fetch(urlIndex)
          } catch (error) {
            console.log("Index already called")
          }

          const res = await fetch(url + params);
          const result = await res.json();
          console.log(result);
          setHits(result['plants']);
        }
      }
    
    return (
        <div>
          <NavigationBar />
          <Form className={Style.grid}>
          <div className={Style.header}>
            <h1>Search a Plant</h1>
            <span>To find a plant, enter the name or type and we&apos;ll find all the info for your little green friend!</span>
          </div>
          <hr />
            <Form.Group className="mb-3">
              <Form.Control onChange={Search} type="text" />
            </Form.Group>
          </Form>
          { hits.map((hit) => (
            <ListGroup horizontal={'sm'} className="my-2" key={hit.entityId}>
              <ListGroup.Item>{hit.name}</ListGroup.Item>
              <ListGroup.Item>{hit.type}</ListGroup.Item>
              <ListGroup.Item>{hit.description}</ListGroup.Item>
              <ListGroup.Item><image width="80" height="80" alt="Plant Image" src={`data:image/jpeg;base64,/9j/${hit.image}`}/></ListGroup.Item>
              <ListGroup.Item>{hit.shade}</ListGroup.Item>
              <ListGroup.Item>{hit.waterFrequency}</ListGroup.Item>
              <ListGroup.Item>
                <Image 
                  src="/../public/favicon_io/android-chrome-192x192.png" 
                  width="16" 
                  height="16" 
                  alt="Image" 
                />
              </ListGroup.Item>
            </ListGroup>
          ))}
      </div>
    );
}

export default SearchPlant;