import LoginForm from "../../components/LoginForm";
import { useRouter } from 'next/router';
// import setState
import { useState } from 'react';
import Head from 'next/head';
import { userLogin } from "../../lib/apiCalls";


const UserLogin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [disableButton, setDisableButton] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
    
        console.log('sending....')
        setDisableButton(true);

        await userLogin({'email':email, 'password':password})
                            .then( res => {
                                localStorage.setItem('token',res.data.token );
                                localStorage.setItem('user', JSON.stringify(res.data.data));
                                router.push('/user/dashboard')
                            })
                            .catch( err => {
                                console.log(err,'errr')
                             })

        setDisableButton(false);

    }

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        
        if(e.target.id === 'email')  setEmail(e.target.value);
        if(e.target.id === 'password')  setPassword(e.target.value);

    }

    return (
        <>
        <Head>
            <title>User Login</title>
            <meta name="description" content="login for user" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>
            <h1 className="mx-auto mt-2" style={{width:'200px'}}>User Login</h1>
            <LoginForm email={email} password={password} handleChange={handleChange} handleSubmit={handleSubmit} disableButton={disableButton} />
        </div>
        </>
    )

};


export default UserLogin;