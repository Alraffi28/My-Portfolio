import React, { useEffect, useState } from 'react'
import './Home.css'
import HeroImg from '../assets/hero_img.png'
import { Link } from 'react-router-dom'
import { IoIosBriefcase } from "react-icons/io"
import Shuffle from './Shuffle'

export default function Home() {
  const [role , setRole] = useState(0)
  const [char , setChar] = useState(0);
  const [isDelete , setIsDelete] = useState(false)
  const roles = ['Full stack developer', 'Front-end developer' , 'UI UX Designer']
    useEffect(()=>{
      const currentRole = roles[role]
      let timer;
      if (isDelete){
        if(char > 0){
          timer = setTimeout(()=>{
            setChar((prev) => prev-1)
          },100)
        } else{
          setIsDelete(false)
          setRole((prev) => (prev + 1) % roles.length)
        }
      }else{
        if(char < currentRole.length){
          timer = setTimeout(() => {
            setChar((prev)=>prev + 1)
          }, 100);
        } else{
          timer = setTimeout(()=>{
            setIsDelete(true)
          },1500)
        }
      }
      return () => clearTimeout(timer)
    },[char,isDelete,role,roles])
  return (
    <>
    <section id='hero'>
      <div className="hero-text">
        <h3>Hello it's Me</h3>
        <Shuffle
        text="Mohammed Alraffi"
        shuffleDirection="right"
        duration={0.45}
        animationMode="evenodd"
        shuffleTimes={1}
        ease="power3.out"
        stagger={0.03}
        threshold={0.1}
        triggerOnce={true}
        triggerOnHover={true}
        respectReducedMotion={true}
      />
        <h2>I'm a 
          <span> {roles[role].substring(0 , char)}</span>
          <span className='typing'> |</span>
        </h2>
        <p>I build responsive, accessible and user-friendly web applications. I love converting designs into clean, functional interfaces and bringing ideas to life with JavaScript.</p>
        <Link><button> <IoIosBriefcase size={18} />Hire Me</button></Link>
      </div>
        <img src={HeroImg} alt="" className="hero-img"/>
    </section>
    </>
  )
}
