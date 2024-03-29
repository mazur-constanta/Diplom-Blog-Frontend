import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { Form, Container, Button } from 'react-bootstrap';


const ContactsPage = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [usernameFocus, setUsernameFocus] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);
    const [messageFocus, setMessageFocus] = useState(false); 
    const [usernameEmpty, setUsernameEmpty] = useState('Это обязательно поле, пожалуйста введите своё имя.');
    const [emailEmpty, setEmailEmpty] = useState('Это обязательное поле, пожалуйста введите свой email.');
    const [messageEmpty, setMessageEmpty] = useState('Это обязательное поле, пожалуйста введите сообщение.');
    const [formValid, setFormValid] = useState(false);
    
    useEffect(() => {
        if(usernameEmpty || emailEmpty || messageEmpty) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [usernameEmpty, emailEmpty, messageEmpty]);

    const validateUsername = (e) => {
        setUsername(e.target.value);
        const re1 = /[а-яА-ЯёЁa-zA-Z]+$/;
        if(!re1.test(String(e.target.value).toLowerCase())) {
            setUsernameEmpty('Неправильный ввод имени.');
        } else {
            setUsernameEmpty('');
        }
    }

    const validateEmail = (e) => {
        setEmail(e.target.value);
        const re2 = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
        if(!re2.test(String(e.target.value).toLowerCase())) {
            setEmailEmpty('Неправильный ввод email.');
        } else {
            setEmailEmpty('');
        }
    }

    const validateMessage = (e) => {
        setMessage(e.target.value);
        const re3 = /[а-яА-ЯёЁa-zA-Z0-9.]$/;
        if(!re3.test(String(e.target.value).toLowerCase())) {
            setMessageEmpty('Неправильный ввод сообщения.');
        } else {
            setMessageEmpty('');
        }
    }

    const cursorIsEmpty = (e) => {
        switch(e.target.name) {
            case 'username':
                setUsernameFocus(true)
                break;

            case 'email':
                setEmailFocus(true)
                break;

            case 'message':
                setMessageFocus(true)
                break;

            default:
                break;
        }
    }

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('mail', 'template_ztf847m', e.target, 'user_7nuMVcD2CUGBKVIbIbryh')
        .then((result) => {
            console.log(`Пользователь: ${username}, e-mail: ${email}, сообщение: ${message}. Статус: ${result.text}.`);
        }, (error) => {
            console.log(`Сообщение не может быть отправлено! Статус: ${error.text}.`);
        });
        setUsername('');
        setEmail('');
        setMessage('');
    }

    // onBlur - событие фокуса ( вызывается при пропадании фокуса с элемента)

    return(
        <>
            <Container className="d-block w-50">
                <h1 className="text-center mt-4 ">Свяжитесь с нами</h1>
                <Form onSubmit={sendEmail} className="contact-form">
                    <Form.Label>Имя:</Form.Label>
                    {(usernameFocus && usernameEmpty) && <div style={{color: 'red'}}>{usernameEmpty}</div>}
                    <Form.Control type="text"  name="username" placeholder="Ваше имя" value={username} onBlur={(e) => cursorIsEmpty(e)} onChange={(e) => validateUsername(e)} />

                    <Form.Label className="mt-2">Еmail:</Form.Label>
                    {(emailFocus && emailEmpty) && <div style={{color: 'red'}}>{emailEmpty}</div>}
                    <Form.Control type="email" name="email" placeholder="Ваш email" value={email} onBlur={(e) => cursorIsEmpty(e)} onChange={(e) => validateEmail(e)} />

                    <Form.Label className="mt-3">Сообщение:</Form.Label>
                    {(messageFocus && messageEmpty) && <div style={{color: 'red'}}>{messageEmpty}</div>}
                    <Form.Control as="textarea" name="message" rows="5" placeholder="Ваше сообщение" value={message} onBlur={(e) => cursorIsEmpty(e)} onChange={(e) => validateMessage(e)} />

                    <Button type="submit" variant="secondary" className="mt-2" disabled={!formValid} onClick={formValid}>
                        Отправить
                    </Button>
                </Form>

                <h5 className="text-center mt-5 mb-5">Контактные данные
                <h6>Р. Молдова, г. Кишинев, ул. Гренобле 120, оф. 15</h6>
                <h6>Телефон: (+373)05-062-018</h6>
                <h6>Почта: mothers.helper@mail.ru</h6></h5>
        </Container>
        </>
    );
}

export default ContactsPage;



// import React, { Component } from 'react';
// import { Container, Form, Button } from 'react-bootstrap';

// export default class ContactsPage extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             username: '',
//             email: '',
//             message: ''
//         };

//         this.formSubmit = (e) => {
//             e.preventDefault();
//             console.log(`Username: ${this.state.username}, e-mail: ${this.state.email}, message: ${this.state.message}`);
//             this.setState({
//                 username: '',
//                 email: '',
//                 message: ''
//             });
//         }
   

//         this.sendEmails = (e) => {
//             e.preventDefault();
        
//             emailjs.sendForm('gmail', 'template_5pfece7', e.target, 'user_eTIRadyiP0nOtWVeoV3x3')
//             .then((result) => {
//                 console.log(result.text);
//             }, (error) => {
//                 console.log(error.text);
//             });
//         }
//     }

//     render() {

//         const { username, email, message, sendEmails } = this.state;

//         return (
//             <Container className="d-block w-50">
//                 <h1 className="text-center">Свяжитесь с нами</h1>
//                 <Form onSubmit={sendEmails}>
//                     <Form.Group controlId="formBasicName">
//                         <Form.Label>Имя, Фамилия:</Form.Label>
//                         <Form.Control type="text" placeholder="Ваше имя" name={username} value={username} onChange={(e) => this.setState({ username: e.target.value })} />
//                         <Form.Text className="text-muted">
//                             Ваше имя скрыто от других политикой безопасности
//                         </Form.Text>
//                     </Form.Group>

//                     <Form.Group controlId="formBasicEmail">
//                         <Form.Label>Еmail:</Form.Label>
//                         <Form.Control type="email" placeholder="Ваш email" name={email} value={email} onChange={(e) => this.setState({ email: e.target.value })}  />
//                         <Form.Text className="text-muted">
//                             Ваш email скрыт от других политикой безопасности
//                         </Form.Text>
//                     </Form.Group>

//                     <Form.Group controlId="formBasicTextarea">
//                         <Form.Label>Сообщение:</Form.Label>
//                         <Form.Control as="textarea" rows="5" placeholder="Ваше сообщение" name={message} value={message} onChange={(e) => this.setState({ message: e.target.value })}  />
//                     </Form.Group>

//                     <Button variant="secondary" type="submit" className="mb-4" onClick={this.formSubmit} >
//                         Отправить
//                     </Button>
//                 </Form> 

//                 <h5 className="text-center mt-5 mb-5">Контактные данные
//                 <h6>Р. Молдова, г. Кишинев, ул. Гренобле 120, оф. 15</h6>
//                 <h6>Телефон: (+373)68-041-683</h6>
//                 <h6>Почта: constanta.mazur@yandex.com</h6></h5>
//             </Container>
//         );
//     }
// }