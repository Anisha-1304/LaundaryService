import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

const ladiesItems = ['Top', 'Jeans', 'Dress', 'Skirt']; // Add more items for ladies as needed
const mensItems = ['Shirt', 'Trousers', 'Tie', 'Jeans']; // Add more items for mens as needed

function Cart() {
    const [ladiesQuantities, setLadiesQuantities] = useState({});
    const [mensQuantities, setMensQuantities] = useState({});
    const [customerName, setCustomerName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');

    const increaseQuantity = (category, item) => {
        if (category === 'ladies') {
            setLadiesQuantities((prevQuantities) => ({
                ...prevQuantities,
                [item]: (prevQuantities[item] || 0) + 1,
            }));
        } else if (category === 'mens') {
            setMensQuantities((prevQuantities) => ({
                ...prevQuantities,
                [item]: (prevQuantities[item] || 0) + 1,
            }));
        }
    };

    const decreaseQuantity = (category, item) => {
        if (category === 'ladies' && ladiesQuantities[item] > 0) {
            setLadiesQuantities((prevQuantities) => ({
                ...prevQuantities,
                [item]: prevQuantities[item] - 1,
            }));
        } else if (category === 'mens' && mensQuantities[item] > 0) {
            setMensQuantities((prevQuantities) => ({
                ...prevQuantities,
                [item]: prevQuantities[item] - 1,
            }));
        }
    };

    const handleNameChange = (e) => {
        setCustomerName(e.target.value);
    };

    const handleMobileNumberChange = (e) => {
        setMobileNumber(e.target.value);
    };

    const handleSubmit = () => {
        // Add your submit logic here
        console.log('Form submitted:', {
          customerName,
          mobileNumber,
          ladiesQuantities,
          mensQuantities,
        });
      };

    return (
        <div>
            <Row>
                <Col>
                    <Form>
                        <Form.Group controlId="customerName">
                            <Form.Label>Customer Name:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter customer name"
                                value={customerName}
                                onChange={handleNameChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="mobileNumber">
                            <Form.Label>Mobile Number:</Form.Label>
                            <Form.Control
                                type="tel"
                                placeholder="Enter mobile number"
                                value={mobileNumber}
                                onChange={handleMobileNumberChange}
                            />
                        </Form.Group>
                    </Form>
                </Col>
            </Row>

            <Row>
                <Col>
                    <h2>Ladies</h2>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="ladies-dropdown">Ladies</Dropdown.Toggle>

                        <Dropdown.Menu>
                            {ladiesItems.map((item, index) => (
                                <div key={index} className="cart-item">
                                    <Dropdown.Item href={`#/ladies-${item.toLowerCase()}`}>
                                        {item} - Quantity: {ladiesQuantities[item] || 0}
                                    </Dropdown.Item>
                                    <Button variant="outline-primary" onClick={() => increaseQuantity('ladies', item)}>
                                        +
                                    </Button>
                                    <Button variant="outline-danger" onClick={() => decreaseQuantity('ladies', item)}>
                                        -
                                    </Button>
                                </div>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                <Col>
                    <h2>Mens</h2>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="mens-dropdown">
                            Mens
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {mensItems.map((item, index) => (
                                <div key={index} className="cart-item">
                                    <Dropdown.Item href={`#/mens-${item.toLowerCase()}`}>
                                        {item} - Quantity: {mensQuantities[item] || 0}
                                    </Dropdown.Item>
                                    <Button variant="outline-primary" onClick={() => increaseQuantity('mens', item)}>
                                        +
                                    </Button>
                                    <Button variant="outline-danger" onClick={() => decreaseQuantity('mens', item)}>
                                        -
                                    </Button>
                                </div>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Button variant="primary" onClick={handleSubmit}>
              Submit
            </Button>
                </Col>
            </Row>
        </div>
    );
}

export default Cart;

// import React, { useState } from 'react';
// import { Form, Button, Col } from 'react-bootstrap';

// const Cart = () => {
//   const [customerName, setCustomerName] = useState('');
//   const [mobileNumber, setMobileNumber] = useState('');
//   const [selectedItems, setSelectedItems] = useState([]);

//   const handleItemChange = (event) => {
//     const { value } = event.target;
//     setSelectedItems(value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Replace the following logging logic with your actual data-saving logic
//     console.log('Customer Name:', customerName);
//     console.log('Mobile Number:', mobileNumber);
//     console.log('Selected Items:', selectedItems);
//   };

//   return (
//     <Form onSubmit={handleSubmit}>
//       <Form.Row>
//         <Form.Group as={Col} controlId="customerName">
//           <Form.Label>Customer Name</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Enter your name"
//             value={customerName}
//             onChange={(e) => setCustomerName(e.target.value)}
//             required
//           />
//         </Form.Group>

//         <Form.Group as={Col} controlId="mobileNumber">
//           <Form.Label>Mobile Number</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Enter your mobile number"
//             value={mobileNumber}
//             onChange={(e) => setMobileNumber(e.target.value)}
//             required
//           />
//         </Form.Group>
//       </Form.Row>

//       <Form.Group controlId="itemSelect">
//         <Form.Label>Select Items</Form.Label>
//         <Form.Control
//           as="select"
//           multiple
//           value={selectedItems}
//           onChange={handleItemChange}
//           required
//         >
//           <option value="shirt">Shirt</option>
//           <option value="pant">Pant</option>
//         </Form.Control>
//       </Form.Group>

//       <Button variant="primary" type="submit">
//         Submit
//       </Button>
//     </Form>
//   );
// };

// export default Cart;




