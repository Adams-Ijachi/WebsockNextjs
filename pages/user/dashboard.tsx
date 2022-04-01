
import Toast from '../../components/Toast';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import EchoConfig from '../../lib/echo';





const UserDashboard = () => {

    const [user , setUser ] = useState(null);
    const [showToast , setShowToast ] = useState('hide');
    const [toastMessage , setToastMessage ] = useState('');

    const router = useRouter();


    useEffect( () =>{ 
        
        let currentUser = JSON.parse(localStorage.getItem('user'))

        if(!currentUser) {
            router.push('/user/login')
            return
        } 

        setUser(currentUser);
        EchoConfig();

        window.Echo.private(`User.${currentUser.id}`)
        .listen('UserRequestStatusUpdate', (e) => {
            console.log(e.message,'test');

            setShowToast('show');
            setToastMessage(e.message);

        })

        console.log('loading...')

        return () =>{
            console.log('clean up...')
        }

    },[router])

 


    const handleCloseToast = () =>{
        setShowToast('hide');
    
    }

    if(!user){
        return (
            <div>
                <h1> Loading .... </h1>
            </div>
        )
    }


    return (
        <div>
            
            <h1 className="mx-auto mt-2" style={{width:'200px'}}>User Dashboard</h1>

            <Toast  message={toastMessage} showButton={false} handleRequest={null}  autohide={false} showToast={showToast} closeToast={handleCloseToast} /> 
          
        </div>
    )

};


export default UserDashboard;