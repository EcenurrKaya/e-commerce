import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaEye, FaEyeSlash, FaRegUser } from 'react-icons/fa6';

function Login() {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility =(event)=>{
        event.preventDefault();
        setPasswordVisible(!passwordVisible);
    }
  return (
    <div className='justify-center items-center flex'>
    <Card className="w-full md:w-[500px] text-center">
      <Card.Body>
        <Card.Title className='my-4'>Giriş Yap</Card.Title>
        <Form>
        <InputGroup className='mb-4'>
          <InputGroup.Text id="basic-addon1"><FaRegUser/></InputGroup.Text>
          <Form.Control
            type='email'
            placeholder="Email"
            aria-label="Email"
            aria-describedby="basic-addon1"
          />
        </InputGroup>

        <InputGroup>
          <InputGroup.Text id="basic-addon1">
            <button onClick={togglePasswordVisibility}>{passwordVisible? <FaEyeSlash/>: <FaEye/>}</button>
          </InputGroup.Text>
          <Form.Control
            type={passwordVisible ? 'text': 'password'}
            placeholder="Password"
            aria-label="Password"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <Button variant="primary" className='my-4 w-full'>Giriş Yap</Button>
        <Button className='w-full bg-transparent text-black flex'>Google ile Giriş Yap</Button>
        </Form>
      </Card.Body>
      <Card.Footer className="text-muted">
        <Card.Link href="Register">Kayıt Ol</Card.Link>
      </Card.Footer>
    </Card>
    </div>
  );
}

export default Login;