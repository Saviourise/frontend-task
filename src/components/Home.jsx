import React from 'react'
import '../styles/Home.css'
import Hero from './Hero'
import Card from './Card'
import CardsInfo from '../Cards.json'
import ModalComponent from './Modal'
import { useSelector, useDispatch } from 'react-redux'
import { open } from '../features/ModalSlice'
import { setData } from '../features/ModalInfo'
import ButtonComponent from './Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
    const modal = useSelector((state) => state.modal.value)
    const modalInfo = useSelector((state) => state.modalInfo.value)
    const dispatch = useDispatch()

    const handleOpenModal = (info) => {
        dispatch(open());
        dispatch(setData(info))
  };
    return (
      <>
          <ModalComponent />
      <div className='homeComponent'>
          <Hero />
          <section className="bannerContainer">
                    <div className="banner" onClick={() => {
                        handleOpenModal({name: "Mayfair Witches Pass", owners: "5", collection: "OrangComet", img: "../src/assets/banner.avif", volume: "4,556", wallet: "ETH", floor: "0.1"})
                    }}>
                  <div>
                      <h1>Mayfair Witches Pass</h1>
                      <p>Collection: OrangComet</p>
                      <p>4,556 remaining - ETH wallet</p>
                      <ButtonComponent color={"var(--color-2)"} link={"Mayfair Witches Pass"} />
                      
                    </div>
              </div>
          </section>
          <section className="verifiedCardContainer cardContainer">
              <h2>Verified NFTs</h2>
              
              <div className="cards">
              {
                      CardsInfo.map((card, index) => {
                          return (card.type === "verified") &&
                              <Card key = { index } info = { card } verified={true} />
                            }
                        )
                  }
            </div>
        </section>
        <section className="trendingCardContainer cardContainer">
              <h2>Trending NFTs</h2>
              
              <div className="cards">
              {
                      CardsInfo.map((card, index) => {
                          return (card.type === "trending") &&
                              <Card key = { index } info = { card } verified={false} />
                            }
                        )
                  }
            </div>
          </section>
          <section className="AllCardContainer cardContainer">
                    <h2>All NFTs</h2>
                    <Row className="allCards">

                        {
                            CardsInfo.map((card, index) => {
                                return <Col xxl={4} lg={4} sm={6} xs={12} style={{marginBottom: 50, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    <Card key={index} info={card} verified={false} margin={true} />
                                    </Col>
                            })
                        }
                    </Row>
          </section>
            </div>
      </>
            
  )
}

export default Home