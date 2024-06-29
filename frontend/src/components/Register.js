import React from 'react';

const Register = () => {
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
                    <p style={styles.subheading}></p>
                    <div style={styles.inputGroup}>
                        <label htmlFor="Firstname" style={styles.label}>Firstname</label>
                        <input type="text" id="Firstname" placeholder="Firstname" style={styles.input} />
                    </div>
                    <div style={styles.inputGroup}>
                        <label htmlFor="Lastname" style={styles.label}>Lastname</label>
                        <input type="text" id="Lastname" placeholder="Lastname" style={styles.input} />
                    </div>
                    <div style={styles.inputGroup}>
                        <label htmlFor="username" style={styles.label}>Username</label>
                        <input type="text" id="username" placeholder="Username" style={styles.input} />
                    </div>
                    <div style={styles.inputGroup}>
                        <label htmlFor="Email" style={styles.label}>Email</label>
                        <input type="text" id="Email" placeholder="Email" style={styles.input} />
                    </div>
                    <div style={styles.inputGroup}>
                        <label htmlFor="password" style={styles.label}>Password</label>
                        <input type="password" id="password" placeholder="Password" style={styles.input} />
                    </div>
                    <button style={styles.loginButton}>Register Now</button>
                
                    
                </div>
                <div style={styles.loginImage}>
                    <img src="./Images/3688.jpg" alt="Person holding tablet" style={styles.image} />
                </div>
            </div>
        </div>
    );
};



export default Register;