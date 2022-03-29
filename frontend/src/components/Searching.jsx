import React, { useContext, useRef, useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { SongContext } from '../Contexts/SongContext';
import { useSelector } from 'react-redux';

const ava = require("../assets/ava1.png");

const Searching = () => {
  const navigate = useNavigate()
  const user = useSelector(state => state.auth.login.currentUser)
  // const headerRef = useRef(null)
//   useEffect(() => {
//     window.addEventListener("scroll", () => {
//         if (document.body.scrollTop >= 60 || document.documentElement.scrollTop >= 60) {
//             headerRef.current.classList.add('shrink')
//         } else {
//             headerRef.current.classList.remove('shrink')
//         }
//     })
//     // return () => {
//     //     window.removeEventListener("scroll", null)
//     // };
// }, []); 

  const [currentValue, setCurrentValue] = useState('')
  const [active, setActive] = useState(false)
  const { setValue, valueSearch, getCountData, setIdList } = useContext(SongContext)
  const inputRef = useRef()
  const resultList = useRef()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setValue(currentValue)
  }
  const handleClick = (id) => {
    setIdList(id)
  }

  const listRender = getCountData(4, valueSearch)
  
  useEffect(() => {
    
    function handleClickOutside(event) {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setActive(false)
      }else setActive(true)
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [active]);
  
  return (
      <div className="searching">
        <div className="searching__control">
          <i class="ri-arrow-left-line" onClick={() => navigate(-1)}></i>
          <i class="ri-arrow-right-line" onClick={() => navigate(1)}></i>
        </div>
        <div className="searching__input" ref={inputRef}>
          <div className="searching__input__search">
          <input type="text" placeholder='what do you want ?' onChange={e => setCurrentValue(e.target.value)}/>
          <i className="ri-search-line search__icon" onClick={handleSubmit}></i>
        </div>
          {
            active ? <ul className="searching__result__list" ref={resultList}>
            {
              listRender?.map((item, index) => (
                <Link to={`/album/${item?.album?.encodeId}`} className="searching__result__list__item" key={index} onClick={() => handleClick(item.album.encodeId)}>
                  <div className="searching__result__list__item__img">
                    <img src={item.thumbnail} alt="" />
                  </div>
                  <div className="searching__result__list__item__txt">
                    <h3>{item.title}</h3>
                    <p>{item.artistsNames}</p>
                  </div>
                </Link>
              ))
            }
          </ul> : null
          }
        </div>
        <div className="searching__ava">
          <div className="searching__ava__left">
            <Link to="/setting" className='ri-settings-3-line'></Link>
            <Link to="/setting" className="ri-notification-line"></Link>
          </div>
          <div className="searching__ava__right">
          {
            user ? <Link to='/user' className="searching__ava__right__img">
              <img src={ava} alt="" />
              {/* <div className="logout">Logout</div> */}
            </Link>
             : <div className="searching__ava__right__btn"><Link to='/login'>LogIn</Link></div>
          }
          </div>
        </div>
      </div>
  )
};

export default Searching;
