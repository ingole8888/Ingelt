import { Box, Button, Image, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import Googlead from '../Images/Googelad.png'
import one from '../Images/1.png'
import two from '../Images/1013.png'
import three from '../Images/1014.png'
import group1 from '../Images/Group21.png'
import group2 from '../Images/Group1000003205.png'
import { AiFillCheckCircle } from 'react-icons/ai';
import { PiNumberCircleTwoFill } from 'react-icons/pi'
import { PiNumberCircleThreeFill } from 'react-icons/pi'
import { IoMdArrowDropdownCircle } from 'react-icons/io'
import { AiFillTwitterCircle, AiOutlineInstagram, AiOutlineMail } from 'react-icons/ai'
import { CiFacebook, CiLocationOn } from 'react-icons/ci'
import { FiPhoneCall } from 'react-icons/fi'
import flag from '../Images/twemoji_flag-india.png'
import axios from 'axios'

const Dashboard = () => {
    const [formData, setFormData] = useState({
        name: '',
        number: ''
    });
    const [mydata, setMydata]=useState({
        yourname:"",
        email:"",
        message:""
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };
    const handleChange1 = (e) => {
        const { name, value } = e.target;
        setMydata((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Post the form data to the server using Axios
        axios.post('https://proback.onrender.com/details/adddetails', formData)
            .then((response) => {
                // Handle successful response here
                console.log(response);
            })
            .catch((error) => {
                // Handle error here
                console.error(error);
            });
    };
    const handleSubmit1 = (e) => {
        e.preventDefault();

        // Post the form data to the server using Axios
        axios.post('https://proback.onrender.com/contact/addcontact', mydata)
            .then((response) => {
                // Handle successful response here
                console.log(response);
            })
            .catch((error) => {
                // Handle error here
                console.error(error);
            });
    };

    return (
        <Box>
            <Box style={{ width: "100%", height: "35rem", display: "flex" }}>
                <Box style={{ width: "45%", textAlign: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: "2rem", fontWeight: 'bold' }}>Start Your IELTS Preparation </Text>
                    <Text style={{ fontSize: "2rem", fontWeight: 'bold' }}>And Get Desire Bands</Text>
                    <li style={{ color: '#000000' }}>Get access to IELTS Centralised Library</li>
                    <li style={{ color: '#000000' }}>British Council Certified Teacher</li>
                    <Box style={{
                        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", borderRadius: '2rem',
                        padding: '1rem', marginTop: '1rem', width: '27rem', marginLeft: '3rem'
                    }}>
                        <Box style={{ display: 'flex', gap: '2rem', marginLeft: '3rem' }}>
                            <Text style={{ display: 'flex', gap: '1rem' }}><AiFillCheckCircle style={{ marginTop: "5px" }} /> Start</Text>
                            <Text style={{ color: 'gray', display: 'flex', gap: '1rem' }}><PiNumberCircleTwoFill style={{ marginTop: "5px" }} /> Fill Details </Text>
                            <Text style={{ color: 'gray', display: 'flex', gap: '1rem' }}><PiNumberCircleThreeFill style={{ marginTop: "5px" }} /> Confirm</Text>
                        </Box>
                        <Text style={{ fontWeight: 'bold', fontSize: '2rem', textAlign: 'left' }}>Free IELTS Classes</Text>
                        <form onSubmit={handleSubmit}>
                            <Input type="text" name="name" value={formData.name} onChange={handleChange} style={{ marginBottom: '1rem' }} placeholder='Enter Your Full name' />
                            <Box style={{ display: 'flex' }}>
                                <Button style={{ marginBottom: '1rem' }} ><Image src={flag} style={{ height: '1.5rem', width: '2rem' }} />
                                    +91 <IoMdArrowDropdownCircle style={{ fontSize: '2rem' }} /></Button>
                                <Input type='number' name="number" value={formData.number} onChange={handleChange} style={{ marginBottom: '1rem' }} placeholder='Phone Number' />
                            </Box>
                            <Button type='submit' style={{ marginBottom: '1rem', paddingLeft: '10.2rem', paddingRight: '10.2rem', backgroundColor: '#001E43', color: 'white' }} >
                                Continue</Button>
                        </form>
                        <Text style={{ fontSize: '0.7rem', marginBottom: '1rem' }}>By continuing, you agree to our Term of services & Privacy policy</Text>
                    </Box>
                </Box>
                <Box style={{ width: "45%", gap: "1rem" }}>
                    <Image src={group1} style={{ width: "40rem", height: "32rem", marginLeft: "7rem" }} />
                    <Image src={group2} style={{ width: "40rem", position: "absolute", height: "27rem", marginTop: '-27rem' }} />
                </Box>
            </Box>
            <Box style={{ margin: "auto", display: "flex", width: "90%" }}>
                <Image src={one} style={{ width: "29rem", height: "15rem" }} />
                <Image src={two} style={{ width: "29rem", height: "15rem" }} />
                <Image src={three} style={{ width: "29rem", height: "15rem" }} />
            </Box>
            <Image src={Googlead} style={{ width: "100%", height: "56rem" }} />

            {/* one image remain */}
            <Text style={{ fontWeight: 'bold', fontSize: '2rem' }}>Get in Touch with Us</Text>
            <Text>Elevate Your Institute Management and Student Success - Contact Us Now!</Text>

            <Box style={{
                margin: "auto", width: "90%", height: '55rem', display: 'flex', gap: '1rem'
                , marginTop: '2rem', borderRadius: '2rem'
            }}>
                <Box style={{ width: '74%', alignItems: 'center', marginTop: '20%', marginLeft: '15%' }}>
                    <Box style={{ width: '40%' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: '2rem', textAlign: 'left' }}>Contact Us</Text>
                        <Text style={{ textAlign: 'left' }}>Feel Free to contact us any time. We will get </Text>
                        <Text style={{ textAlign: 'left' }}>back to you as soon as we can!.</Text>
                        <form onSubmit={handleSubmit1}>
                        <Text style={{ textAlign: 'left', marginTop: '1rem' }}>Name</Text>
                        <Input type="text" name="yourname" value={formData.yourname} onChange={handleChange1} placeholder='Enter Name' />
                        <Text style={{ textAlign: 'left', marginTop: '1rem' }} >Email</Text>
                        <Input type="text" name="email" value={formData.email} onChange={handleChange1} placeholder='Email' />
                        <Text style={{ textAlign: 'left', marginTop: '1rem' }}>Message</Text>
                        <Input type="text" name="message" value={formData.message} onChange={handleChange1} placeholder='Enter your message' />
                        <Button type='submit' style={{ marginTop:'2rem', backgroundColor: '#001E43', color: 'white' }} >
                                Submit</Button>
                        </form>
                    </Box>
                </Box>
                <Box style={{ width: '24%', backgroundColor: '#0064E1' }}>
                    <Box style={{ display: 'flex', gap: '3rem', margin: 'auto', width: "70%", marginTop: '50rem' }}>
                        <AiFillTwitterCircle style={{ color: 'white' }} />
                        <AiOutlineInstagram style={{ color: 'white' }} />
                        <CiFacebook style={{ color: 'white' }} />
                    </Box>
                </Box>
            </Box>
            <Box style={{
                height: "30rem", width: '30rem', borderRadius: '2rem', backgroundColor: '#001E43',
                color: 'white', padding: '3rem', marginTop: '-40rem', marginLeft: '50%', position: 'absolute'
            }}>
                <Text style={{ fontWeight: 'bold', fontSize: '2rem', textAlign: 'left', marginTop: '3rem' }}>Contact Information</Text>
                <Text style={{ fontSize: '1.2rem', textAlign: 'left', marginTop: '2rem', display: 'flex', gap: '1rem' }}><FiPhoneCall /> +1012 3456 789</Text>
                <Text style={{ fontSize: '1.2rem', textAlign: 'left', marginTop: '2rem', display: 'flex', gap: '1rem' }}><AiOutlineMail /> demo@gmail.com</Text>
                <Text style={{ fontSize: '1.2rem', textAlign: 'left', marginTop: '2rem', display: 'flex', gap: '1rem' }}><CiLocationOn /> 132 Dartmouth Street Boston, Massachusetts 02156 United States</Text>
            </Box>
        </Box>


    )
}

export default Dashboard