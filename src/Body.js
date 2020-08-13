import React, { useState } from 'react'
import { Card, Button, CardGroup, Carousel, Modal } from 'react-bootstrap'
import meake from './meake.jpg'
let linkimage=''
export default function Body() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  function Example() {
  
  
    return (
      <>
        {/* <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button> */}
  
        <Modal  size="lg" show={show} onHide={handleClose}>
          <Modal.Header  closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <img style={{width:'100%'}}
     
      src={linkimage}/>
          <Modal.Body >
            Woohoo, you're reading this text in a modal!</Modal.Body>
     
        </Modal>
      </>
    );
  }
  return (
        <div style={{direction:'rtl' }}className=" container col-9  " >
        <CardGroup>
  <Card className='m-2 p-3' style={{position:'static'}}  >
    <Card.Img onClick={()=>{linkimage="http://mehan.co.il/media/uploads/13614990_114920262281852_5881336653702465080_n.jpg"
      handleShow()}}  variant="top" src="http://mehan.co.il/media/uploads/13614990_114920262281852_5881336653702465080_n.jpg" />
    <Card.Body>
      <Card.Title>  מעקה קשת</Card.Title>
      <Card.Text>
      מעקה קשת, מרובע 20\20
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card style={{position:'static'}} className='m-2 p-3'>
    <Card.Img variant="top"onClick={()=>{ handleShow() 
    linkimage="http://mehan.co.il/media/uploads/13256127_114919825615229_5468885270626317347_n.jpg"}}
     src="http://mehan.co.il/media/uploads/13256127_114919825615229_5468885270626317347_n.jpg" />
    <Card.Body>
      <Card.Title>שער חשמלי</Card.Title>
      <Card.Text>
       שער חשמלי באורך  5 מטר
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>

</CardGroup>

<CardGroup>
  <Card className='m-2 p-3' style={{position:'static'}}  >
    <Card.Img onClick={()=>{linkimage="https://mehan.co.il/media/uploads/13775447_114940405613171_5451854355075217907_n.jpg"
      handleShow()}}  variant="top" src="https://mehan.co.il/media/uploads/13775447_114940405613171_5451854355075217907_n.jpg" />
    <Card.Body>
      <Card.Title>שער מעוצב</Card.Title>
      <Card.Text>
      שער מעוצב בגודל 6 מטר
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card style={{position:'static'}} className='m-2 p-3'>
    <Card.Img variant="top"onClick={()=>{ handleShow() 
    linkimage="https://mehan.co.il/media/uploads/13754228_114940648946480_5521878568571617597_n.jpg"}}
     src="https://mehan.co.il/media/uploads/13754228_114940648946480_5521878568571617597_n.jpg" />
    <Card.Body>
      <Card.Title> סורג </Card.Title>
      <Card.Text>
        סורג באורך 1 מטר
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>

</CardGroup>



<h1>Solid Works</h1>
<Carousel style={{maxWidth:'500px', margin:'auto'}} >
  <Carousel.Item >
    <img style={{}}
      className="d-block w-100"
      src="http://mehan.co.il/media/uploads/13754363_114969352276943_5804953195921124944_n.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="http://mehan.co.il/media/uploads/13754363_114969352276943_5804953195921124944_n.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="http://mehan.co.il/media/uploads/13620130_115001752273703_8619019816732848673_n.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<br/>





{Example(linkimage) }




        </div>
    )
}
