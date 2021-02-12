import * as React from 'react';
import "./content.css";
import  "../font-awesome-4.7.0/css/font-awesome.min.css";
import foto from "../img/img-1.svg";
import music from "../img/img-2.svg";
import setting from "../img/img-3.svg";
import brouser from "../img/img-4.svg";
import phone from "../img/img-5.svg";
import gallery from "../img/img-6.svg";
import {Map, YMaps, Placemark, RouteButton, GeoObject } from 'react-yandex-maps';




export default function Content({data}) {
    const coordinate = [55.798682, 37.695816];
    const [stasion, setStation] = React.useState("")
    const xml = new XMLHttpRequest();
    const url = "https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=0a376abe-ae78-452f-8151-85d77102c1fb"
    React.useEffect(() => {
        xml.open("GET", url, true)
        xml.onload =  () => {
            if (xml.status >= 400){
                console.error(xml.response)
            }else {
                setStation()

            }
        }
        xml.send()

    },[])


    const infoUsers = data.data.AboutUs
    const img = [foto, music, setting, brouser, phone, gallery, foto, music]
    const buttons = ["All", "WEB DESIGN", "GRAPHIC DESIGN", "FLAT DESIGN"]
    const [images, setImages] = React.useState(img)

    const handleclick = (e) => { // функция перебора кнопок с фильтрацией картинок
        //Плохой вариант
        const btn = document.querySelectorAll('.content-container-portfolio-item')
        if(e === btn[0]){
            return setImages(img)
        }else if(e === btn[1]){
             return  setImages([img[0],img[1],img[2]])

        }else if(e === btn[2]){

              return setImages([img[6],img[5],img[4]])
        }else if(e === btn[3]){
            return setImages([img[7],img[2],img[8]])
        }


    }

    return (
        <div className="content-container">
            <section className="content-container-portfolio">
                <div>
                    <h1 className="content-container-portfolio-h1"> Portfolio</h1>
                    <p >Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                </div>
                <ul className="content-container-portfolio-list">
                    {buttons.map((btn,id) =>
                        <button
                            key={id}
                            className="content-container-portfolio-item"
                            onClick={e => handleclick(e.target)}
                        >
                            {btn}</button>)}
                </ul>
                <div className="content-container-portfolio-img">
                    {images.map( (itemImg, id)  =>
                        <div onChange={setImages} key={id} className="content-container-portfolio-imgconeiner">
                            <img  className="img" src={itemImg} alt={itemImg}/>

                        </div>


                    )}
                </div>

            </section>
            <section className="content-container-AboutUS">
                <div>
                    <h1 className="content-container-AboutUS-h1"><span>About US</span></h1>
                    <p className="content-container-AboutUS-p"><span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</span></p>
                </div>
                <div className="content-container-AboutUS-row">
                    {infoUsers.map( item => <div key={item.id} className="content-container-AboutUS-content">
                        <div className="card">
                            <img  src={item.foto} alt="users"/>
                            <div className="content-container-AboutUS-content-icons">
                                <i className="fa fa-facebook  pointer" aria-hidden="true"></i>
                                <i className="fa fa-twitter  pointer" aria-hidden="true"></i>
                                <i className="fa fa-google-plus-official  pointer" aria-hidden="true"></i>
                                <i className="fa fa-dribbble  pointer" aria-hidden="true"></i>
                            </div>
                        </div>
                        <h2 className="content-container-AboutUS-content-h2">{item.name}</h2>
                        <h3 className="content-container-AboutUS-content-h3">{item.profession}</h3>
                        <p className="content-container-AboutUS-content-p">{item.text}</p>

                    </div>)}
                </div>
            </section>
            <section className="content-container-ContactUS">
                <div>
                    <h1 className="content-container-h1 text-color">Contact Us</h1>
                    <p className='content-container-p text-color'>Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit.</p>
                </div>
                <div className="content-container-ContactUS-content">
                    <div className="content-container-ContactUS-content-form">
                        <form className="my-flex-cont">
                            <div className="my-flex-box">
                                <input placeholder="Your name"/>
                            </div>
                            <div className="my-flex-box">
                                <input placeholder="Your email"/>
                            </div>
                            <div className="my-flex-box">
                                <textarea
                                          placeholder="Your message"></textarea>
                            </div>
                            <div className="my-flex-box">
                                <button className="content-container-ContactUS-content-form-btn">SUBMIT</button>
                            </div>

                        </form>
                    </div>
                    <div className="content-container-ContactUS-content-map">
                        <div>
                            <h3 className="content-container-ContactUS-content-map-h3">
                                <i className="fa fa-map-marker" aria-hidden="true"></i>
                                Bla Bla Company 125009 Moscow, Red Square 1
                            </h3>
                        </div>
                       <div className="maps">
                           <YMaps>
                               <Map
                                   width="457px"
                                   height ="289px"
                                   defaultState={{
                                       center: coordinate,
                                       zoom: 13,
                                       controls: []


                                   }}>
                                   {<Placemark
                                       geometry={coordinate}
                                       properties={{
                                           iconContent: "Колодезный переулок д.2а "
                                       }}
                                       options={{
                                           preset: "islands#blueStretchyIcon",
                                       }}

                                   />}
                                   <GeoObject
                                       geometry={{
                                           type: 'LineString',
                                           coordinates:[
                                               coordinate, [55.789258, 37.679349],coordinate,[55.796267, 37.713645]
                                           ]


                                       }}
                                       options={{
                                           geodesic: true,
                                           strokeWidth: 5,
                                           strokeColor: '#F008',
                                       }}
                                   />


                                  <RouteButton
                                      instanceRef={ref => {
                                          if (ref) {
                                              ref.routePanel.state.set({

                                                  toEnabled: false,
                                                  from: stasion,
                                                  to: "Москва, Колодезный переулок д.2а ",
                                                  type: 'auto',
                                              });
                                              ref.routePanel.options.set({
                                                  allowSwitch: false,
                                                  reverseGeocoding: true,
                                                  types: { masstransit: true, pedestrian: true, taxi: true }
                                              })
                                          }

                                  }}
                                  />

                               </Map>
                           </YMaps>
                       </div>

                    </div>
                </div>
            </section>

        </div>
    );
};