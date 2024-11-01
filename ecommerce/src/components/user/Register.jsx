import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaEye, FaEyeSlash, FaRegUser } from 'react-icons/fa6';
import axios from 'axios';

function Register() {
    const [pasawordVisibile, setPasswordVisible] = useState(false);
    const [username, setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState(''); 

    const togglePasswordVisibility = (event) =>{
        event.preventDefault();
        setPasswordVisible(!pasawordVisibile);
    }

    async function handleRegister() {
      console.log('aasdas');
      try {
          const response = await axios.post('http://localhost:5000/api/auth/register', {
              username,
              email,
              password
          });
          alert(response.data.message); // Başarılı kayıt mesajı
      } catch (error) {
          console.error(error.response?.data?.message || 'Kayıt işlemi sırasında hata oluştu'); // Hata mesajını göster
      }
  }

  return (
    <div className='justify-center items-center flex'>
    <Card className="w-full md:w-[500px] text-center">
      <Card.Body>
        <Card.Title className='my-4'>Kayıt Ol</Card.Title>
        <Form onSubmit={(e)=>{e.preventDefault(); handleRegister();}}>
        <InputGroup className='mb-4'>
          <InputGroup.Text id="basic-addon1"><FaRegUser/></InputGroup.Text>
          <Form.Control
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
          />
        </InputGroup>

        <InputGroup className='mb-4'>
          <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
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
            <button onClick={togglePasswordVisibility}>
                {pasawordVisibile ? <FaEyeSlash/> : <FaEye/>}
            </button>
          </InputGroup.Text>
          <Form.Control
            type={pasawordVisibile ? 'text' : 'password'}
            placeholder="Password"
            aria-label="Password"
            aria-describedby="basic-addon1"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
        </InputGroup>
        <Button variant="primary" className='my-4 w-full' type='submit'>Kayıt Ol</Button>
        <Button className='w-full bg-transparent text-black'>Google ile Kayıt Ol</Button>
        </Form>
      </Card.Body>
      <Card.Footer className="text-muted">
        <Card.Link href="Login">Giriş yap</Card.Link>
      </Card.Footer>
    </Card>
    </div>
  );
}

export default Register;