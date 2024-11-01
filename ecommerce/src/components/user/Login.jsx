import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaEye, FaEyeSlash, FaRegUser } from 'react-icons/fa6';
import axios from 'axios';

function Login({onLoginSuccess}) {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const togglePasswordVisibility =(event)=>{
        event.preventDefault();
        setPasswordVisible(!passwordVisible);
    }

    async function handleLogin() {
      try {
          const response = await axios.post('http://localhost:5000/api/auth/login', {
              email,
              password
          });
          alert(response.data.message);
          onLoginSuccess();
          navigate('/basket');
      } catch (error) {
          console.error(error.response?.data?.message || 'Giriş işlemi sırasında hata oluştu');
      }
  }
  return (
    <div className='justify-center items-center flex'>
    <Card className="w-full md:w-[500px] text-center">
      <Card.Body>
        <Card.Title className='my-4'>Giriş Yap</Card.Title>
        <Form onSubmit={(e)=>{e.preventDefault(); handleLogin();}}>
        <InputGroup className='mb-4'>
          <InputGroup.Text id="basic-addon1"><FaRegUser/></InputGroup.Text>
          <Form.Control
            type='email'
            placeholder="Email"
            aria-label="Email"
            aria-describedby="basic-addon1"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
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
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
        </InputGroup>
        <Button variant="primary" className='my-4 w-full' type='submit'>Giriş Yap</Button>
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