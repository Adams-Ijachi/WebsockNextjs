import Echo from "laravel-echo";
import { broadcastAuthInstance } from "./apiCalls";


const EchoConfig = () =>{


    
        window.Pusher = require('pusher-js');
        broadcastAuthInstance.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
       
    
        window.Echo = new Echo({
            broadcaster: 'pusher',
            key: "local",
            wsHost:"localhost",
            wsPort: 6001,
            forceTLS: false,
            disableStats: true,
            authorizer: (channel, option) => {
                return {
                    authorize: (socketId, callback) => {
                        broadcastAuthInstance.post('auth', {
                            socket_id: socketId,
                            channel_name: channel.name,
                        })
                        .then(response => {
                            console.log(response)
                            callback(false, response.data);
                        })
                        .catch(error => {
                            callback(true, error);
                        });
                    }
                }
            }
        })
   
    

}

export default EchoConfig;
