import React from 'react'
import '../styles/Card.css'
import { useSelector, useDispatch } from 'react-redux'
import { open } from '../features/ModalSlice'
import { setData } from '../features/ModalInfo'
import { TiStarburst } from 'react-icons/ti'

const Card = (props) => {
    const modal = useSelector((state) => state.modal.value)
    const modalInfo = useSelector((state) => state.modalInfo.value)
  const dispatch = useDispatch()

    const handleOpenModal = (info) => {
        dispatch(open());
        dispatch(setData(info))
  }
  return (
      <div className='cardComponent' onClick={() => handleOpenModal(props.info)} style={props.margin && {marginRight: 0}}>
          <div>
              <img src={props.info.img} alt={props.info.name} />
              <div>
                  <h3>{props.info.name} {props.verified && <TiStarburst size={20} />}</h3>
                  <div>
                      <p><span>FLOOR</span><br></br>{props.info.floor}</p>
                      <p><span>VOLUME</span><br></br>{props.info.volume}</p>
                  </div>
              </div>
        </div>
    </div>
  )
}

export default Card