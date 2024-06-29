import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'

const Register = () => {
    // const navigate = useNavigate()
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            if (data.message === "User registered successfully") {
                alert('Registration successful');
                // navigate('/')

            } else {
                alert('Error in Registration');
            }
            // Handle success - e.g., show a success message to the user
        } catch (error) {
            console.error('Error during registration:', error.message);
            alert("Enter Valid Data")
            // Handle error - e.g., show an error message to the user
        }
    };

    const styles = {
        loginContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '94vh',
            backgroundColor: '#f0f0ff',
            padding: '20px',
        },
        loginBox: {
            display: 'flex',
            backgroundColor: 'white',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden',
            maxWidth: '900px', // Ensure the box does not get too wide
            width: '100%',
        },
        loginForm: {
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            flex: 1,
        },
        heading: {
            fontSize: '24px',
            marginBottom: '10px',
        },
        subheading: {
            marginBottom: '20px',
            color: '#888',
        },
        inputGroup: {
            marginBottom: '15px',
        },
        label: {
            display: 'block',
            marginBottom: '5px',
        },
        input: {
            width: '100%',
            padding: '10px',
            border: '1px solid #ddd',
            borderRadius: '5px',
        },
        loginButton: {
            padding: '10px 20px',
            backgroundColor: '#6a1b9a',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginTop: '10px',
            transition: 'background-color 0.3s',  // Smooth transition for hover effect
        },
        socialLogin: {
            display: 'flex',
            flexDirection: 'column',
            marginTop: '20px',
        },
        socialButton: {
            display: 'flex',
            alignItems: 'center',
            padding: '10px',
            border: '1px solid #ddd',
            borderRadius: '5px',
            cursor: 'pointer',
            marginBottom: '10px',
        },
        socialLogo: {
            width: '20px',
            height: '20px',
            marginRight: '10px',
        },
        loginImage: {
            backgroundColor: '#f0f0ff',
            padding: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
        },
        image: {
            maxWidth: '100%',
            borderRadius: '10px',
            objectFit: 'cover', // Ensures the image covers the area without distortion
        },
    };

    return (
        <div style={styles.loginContainer}>
            <div style={styles.loginBox}>
                <div style={styles.loginForm}>
                    <h1 style={styles.heading}>Register</h1>
                    <div style={styles.inputGroup}>
                        <label htmlFor="firstname" style={styles.label}>Firstname</label>
                        <input
                            type="text"
                            id="firstname"
                            placeholder="Firstname"
                            style={styles.input}
                            value={formData.firstname}
                            onChange={handleChange}
                        />
                    </div>
                    <div style={styles.inputGroup}>
                        <label htmlFor="lastname" style={styles.label}>Lastname</label>
                        <input
                            type="text"
                            id="lastname"
                            placeholder="Lastname"
                            style={styles.input}
                            value={formData.lastname}
                            onChange={handleChange}
                        />
                    </div>
                    <div style={styles.inputGroup}>
                        <label htmlFor="email" style={styles.label}>Email</label>
                        <input
                            type="text"
                            id="email"
                            placeholder="Email"
                            style={styles.input}
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div style={styles.inputGroup}>
                        <label htmlFor="password" style={styles.label}>Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Password"
                            style={styles.input}
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                    <button style={styles.loginButton} onClick={handleSubmit}>Register Now</button>
                </div>
                <div style={styles.loginImage}>
                    <img src="/register.jpg" alt="Person holding tablet" style={styles.image} />
                </div>
            </div>
        </div>
    );
};

export default Register;