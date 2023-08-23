// Cusutom function to check if section is in the viewport- and change the tabs correspondingly:
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Is0,Is1,Is2,Is3 } from '../features/Tabs';

export default function Observer(){
  const dispatch = useDispatch();
    React.useEffect(()=>{
      window.addEventListener('scroll',()=>{
        if (window.scrollY>700 &&window.scrollY<1300){
          dispatch(Is1())
        }else if(window.scrollY>1290 &&window.scrollY<2100){
          dispatch(Is2())
        }else if(window.scrollY>1899 &&window.scrollY<2300){
          dispatch(Is3())
        }else if(window.scrollY<700){
          dispatch(Is0())
        }
      })
    },[dispatch]);
};
