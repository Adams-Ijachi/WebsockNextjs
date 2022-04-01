import Toast from '../../components/Toast';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import EchoConfig from '../../lib/echo';
import { instance } from '../../lib/apiCalls';




const DriverDashboard = () => {

    const [driver , setDriver ] = useState(null);
    const [showToast , setShowToast ] = useState('hide');
    const [toastMessage , setToastMessage ] = useState('');
    const [request, setRequest] = useState(null);


    const router = useRouter();


    useEffect( () =>{ 
        
        let currentDriver = JSON.parse( localStorage.getItem('driver') );

        if(!currentDriver) {
            router.push('/driver/login')
            return 
        } 
        setDriver(currentDriver)

        EchoConfig();

        window.Echo.private(`driver.${currentDriver?.id}`)
        .listen('DriverRequested', (e) => {
            console.log(e.request,'test');

            setRequest(e.request);

           setShowToast('show');
           setToastMessage(e.message);



        })


        return () =>{
            console.log('clean up...')
        }

    },[router])




    const handleCloseToast = () =>{
        setShowToast('hide');
    }

    const handleRequest = async (e:boolean) =>{
        let token =  localStorage.getItem('token')
    
        instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        await instance.post(`/driver/request/${request.id}`, {status: e})
        .then(res => {
                setShowToast('hide');
                setRequest(null);
        })
    }



    if(!driver){
        return (
            <div>
                <h1> Loading .... </h1>
            </div>
        )
    }


    return (
        <div>
            <h1 className="mx-auto mt-2" style={{width:'200px'}}>Driver Dashboard</h1>

            <button type="button" className="btn btn-primary" id="liveToastBtn">Show live toast</button>

            <Toast  message={toastMessage}  handleRequest={handleRequest}  showButton={true} autohide={false} showToast={showToast} closeToast={handleCloseToast} /> 
          
        </div>
    )

};


export default DriverDashboard;