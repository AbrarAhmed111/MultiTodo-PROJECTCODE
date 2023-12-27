import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, CardBody, Form, Label, Input, FormGroup, Button, ModalHeader, Modal, ModalFooter, ModalBody  } from 'reactstrap';

function Hero() {
  const [name, setName] = useState('');
  const [descriptions, setDescriptions] = useState(['']); 
  const [index, setIndex] = useState(1);
  const [sign, setSign] = useState('+');
  const [tasks, setTasks] = useState([]);
  const [modalName, setModalName] = useState('');
  const [modalDescription, setModalDescription] = useState(['']);
  const [editingTask, setEditingTask] = useState(null);
  const [modal, setModal] = useState(false);
  const [indexToDelete, setIndexToDelete] = useState(null);
  const [blink, setblink] = useState(false)



  const handleModalDescriptionChange = (e, i) => {
    const newModalDescriptions = [...modalDescription];
    newModalDescriptions[i] = e.target.value;
    setModalDescription(newModalDescriptions);
  };
  

  
  const cross = () => setModal(false);

 const toggle = (index) => {
    setIndexToDelete(index);
    setModal(!modal);
  };


  const handleDelete = () => {
    if (indexToDelete !== null) {
      setTasks((prevTasks) => prevTasks.filter((task, i) => i !== indexToDelete));
      setModal(false);
      setIndexToDelete(null);
    }
  };

  const cancelEdit = () => {
    setEditingTask(null);
    setModalName('');
    setModalDescription([]);
    setModal(false);
  };
  

  const editTodo = (index) => {
    const taskToEdit = tasks[index];
    setEditingTask(taskToEdit);
    setModalName(taskToEdit.name);
    setModalDescription(taskToEdit.descriptions.map(desc => desc));
    setModal(true);
  };
  
  
  
  

  const addField = () => {
    setIndex(index + 1);
    setDescriptions([...descriptions, '']); 
  };

  const deleteField = (id) => {
    if (index > 1) {
      setIndex(index - 1);
      setDescriptions(descriptions.filter((_, i) => i !== id)); 
    }
  };

  useEffect(() => {
    setSign(index > 1 ? '-' : '+');
  }, [index]);

  useEffect(() =>
  {
    setblink(false);

  },[name])

  const submithandler = (e) => {
    e.preventDefault();
    const newTask = { name, descriptions };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setName('');
    setDescriptions(['']); // Reset the descriptions array
    setblink(true);
  };
  

  const handleDescriptionChange = (e, i) => {
    const newDescriptions = [...descriptions];
    newDescriptions[i] = e.target.value;
    setDescriptions(newDescriptions);
  };

  const submitEdit = (e) => {
    let isEmpty = false;
    const form = e.target;
  const inputs = form.getElementsByTagName('input');
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value.trim() === '') {
      inputs[i].setCustomValidity('Field cannot be empty');
      isEmpty = true;
      break;
    } else {
      inputs[i].setCustomValidity('');
    }
  }

  if (isEmpty) {
    form.reportValidity();
    console.log("hello bhai")
    return; // Return if the form is not valid
  }

  if (modalName.trim() === '' || modalDescription.some(desc => desc.trim() === '')) {
    return;
  }
    setTimeout(() => {
      alert('Task Edited!');
    }, 500);
  
    // Find the index of the editingTask in the tasks array
    const editingTaskIndex = tasks.findIndex((task) => task === editingTask);
    console.log(editingTask)
    if (editingTaskIndex !== -1) {
      // Create a new array with the updated task
      const updatedTasks = [
        ...tasks.slice(0, editingTaskIndex),
        { ...editingTask, name: modalName, descriptions: [...modalDescription] },
        ...tasks.slice(editingTaskIndex + 1),
      ];
  
      // Update the tasks state
      setTasks(updatedTasks);
    }
  
    // Reset state
    setEditingTask(null);
    setModalName('');
    setModalDescription([]);
    setModal(false); // Close the modal after submission
   
  };
  

  return (
    <div id='main-div' className='background-image min-vh-100 pt-5 px-2 '>
      <Container data-aos='fade-right' data-aos-offset='200' data-aos-delay='200' md={6} id='main-container' className='rounded-top-1  col-sm-12 col-md-6 col-lg-6 col-xl-4  justify-content-center align-items-center d-flex flex-column py-3'>
        <Row>
          <h1>Nested Todo</h1>
        </Row>

        <Container className='pt-2' >
          <Card className='text-light' id='card'>
            <CardBody>
              <Form onSubmit={(e) => submithandler(e)}>
                <Col>
                  <FormGroup>
                    <Label className='text-white fw-bold'>Task:</Label>
                    <Input id='outline'
                      required
                      className='w-75 py-3'
                      type='text'
                      placeholder='Enter the task...'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </FormGroup>
                </Col>

                <Container  className='p-0' >
                    
                {[...Array(index)].map((_, i) => (
                  <Col key={i} >
                    <FormGroup>
                      <Label className='text-white fw-bold'>{i > 0 ? 'Add Another Desc...' : 'Description'}</Label>
                      <Row>
                        <Col className='d-flex '>
                          <Input
                            required
                            className='w-75 me-3 py-3 '
                            type='text'
                            placeholder='Enter the task...'
                            value={blink ? '' : descriptions[i] }
                            onChange={(e) => handleDescriptionChange(e, i)}/>
                          <Button
                          onClick={addField}
                          className={`${
                            i+1 === index ? 'py-2 px-2 d-block ' : 'd-none'
                          } bg-primary px-3 fw-bolder me-1`}
                        >
                          {i + 1 === index ? '+' : sign}
                        </Button>

                          <Button onClick={() => deleteField(i)} className={`${index > 1 ? 'fs-4 fs  d-block fw-bolder ' : 'd-none '} px-3 bg-danger`}>
                            -
                          </Button>
                        </Col>
                      </Row>
                    </FormGroup>
                  </Col>
                ))}

                </Container>
                <Col>
                  <FormGroup>
                    <Row>
                      <Col>
                        <Button onClick={(e) => submithandler} type='submit' id='button' className='w-50 rounded-3 fw-bold btn'>
                          Add
                        </Button>
                      </Col>
                    </Row>
                  </FormGroup>
                </Col>
              </Form>
            </CardBody>
          </Card>
        </Container>
        
        
       

                                                    {/* ADDED TASKS */}

      </Container>

      <Container id='second-main-container' className={`${tasks.length > 0 ? 'd-block' : 'd-none '} py-3 px-4 col-sm-12 col-md-6 col-lg-6 col-xl-4 `}>
  <Card id='cards' className=' '>
    <CardBody className='text-light px-1'>
    {tasks.length > 0 && tasks.map((task) => (
  <div key={task.id}>
    <Row className='mt-1 py-2 '>
      <Col>
        <Row id='heading' className='fw-bolder '>
          <h1>{task.name}</h1>
        </Row>
        <Row className='px-1'>
          {task.descriptions.map((desc, i) => (
            <p key={i}>{desc}</p>
          ))}
        </Row>
      </Col>
      <Row>
        <Col className='d-flex '>
        <Button onClick={() => editTodo(tasks.indexOf(task))} className='w-50 btn me-2 ms-3 bg-success '>
  Edit
</Button>



          <Button onClick={() => toggle(tasks.indexOf(task))} className='w-50 btn bg-danger '>Delete</Button>
        </Col>
      </Row>
    </Row>
  </div>
))}


    </CardBody>
  </Card>
</Container>

{/* Reactstrap modal */}                
<Modal isOpen={modal} toggle={toggle} className='bg-warning p-2 rounded-4 '>
            <ModalHeader  className='bg-warning' toggle={cross}>Please Confirm again before press OK!</ModalHeader>
            <ModalBody className='bg-warning p-2 '><p className='ms-2 fw-bold '>You are Deleting The Todo!!!</p></ModalBody>
            <ModalFooter className='bg-dark '><Button className='px-3 ' color="danger" onClick={handleDelete}>OK</Button></ModalFooter>
        </Modal>



        <Modal isOpen={editingTask !== null} className='bg-warning p-2 '>
  <form onSubmit={(e) => submitEdit}>
    <ModalBody className='bg-warning '>
      <div>
        <div>
            <FormGroup>

          <label htmlFor="modalName" className='px-1 py-2 fw-bold '>Edit Name</label>
          <input
            className=' px-2 py-1  text-black border border-black  ms-5 rounded-3 focus:outline-none'
            type="text"
            value={modalName}
            onChange={(e) => setModalName(e.target.value)}
            required
            />
            </FormGroup>
        </div>

        {modalDescription.map((desc, i) => (
          <div key={i}>
            <FormGroup>

            <label htmlFor={`modalDescription${i}`} className='px-1 py-2 fw-bold '>Edit Description</label>
            <input

              required
              id={`inputs`}
              className='w-[93%] px-2 py-1  text-black border border-black  rounded-3 ms-2 focus:outline-none'
              type="text"
              value={desc}
              onChange={(e) => handleModalDescriptionChange(e,i)}
              />
              </FormGroup>
          </div>
        ))}
      </div>
    </ModalBody>
    <ModalFooter className='bg-dark '>
      <Button type="submit" className='px-4 py-2 mt-0 ml-2 ' onClick={submitEdit} color="primary">Update</Button>
      <Button className='px-4 py-2 mt-0 ml-2 rounded-md xl:mt-6' onClick={cancelEdit}>Cancel</Button>
    </ModalFooter>
  </form>
</Modal>



    </div>
  );
}

export default Hero;
