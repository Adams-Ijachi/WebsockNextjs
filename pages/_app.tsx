import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../components/Header';
import {useEffect} from "react";




function MyApp({ Component, pageProps }) {

  useEffect(() => {
    let bootstrap = require('bootstrap/dist/js/bootstrap');

    let option ={

      delay:3000,
      animation : true,
    }

    var toastElList = [].slice.call(document.querySelectorAll('.toast'))
    var toastList = toastElList.map(function (toastEl) {
      return new bootstrap.Toast(toastEl, option)
    })
    

    // // show each toast explicitly
    // toastList.forEach( function(element, index) {
    //   element.show()
    // })
    
    }, []);
 
  return (
    <>
     <Header />
     <Component {...pageProps} />
     </>
  )
}

export default MyApp
