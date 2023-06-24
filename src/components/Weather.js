
import './weatherapp.css'
import './itemBcontent.css'
import './itemAcontent.css'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import '../components/itemAcontent.css'
import { FaSun} from "react-icons/fa6";




function Weather() {
    const Apikey = "fe5556db25627586fc8d128d81142f93"
    const [data, setdata] = useState({})
    const [inputcity, setinputcity] = useState("")



    const getweatherdetails = (cityname) => {
        if (!cityname) return
        const apiurl = (`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${Apikey}`)
        axios.get(apiurl).then((res) => {
            setdata(res.data)
        }).catch((err) => {
            alert('Error', err)
        })
    }


    const handlechangeinput = (e) => {
        setinputcity(e.target.value)
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            getweatherdetails(inputcity)
        }
    }

    let unix_timestamp1 = data?.sys?.sunrise
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    var date1 = new Date(unix_timestamp1 * 1000);
    // Hours part from the timestamp
    var hours1 = date1.getHours();
    // Minutes part from the timestamp
    var minutes1 = "0" + date1.getMinutes();
    // Seconds part from the timestamp
    var seconds1 = "0" + date1.getSeconds();
    // Will display time in 10:30:23 format
    var formattedTime_sunrise = hours1 + ':' + minutes1.substr(-2) + ':' + seconds1.substr(-2);


    let unix_timestamp2 =  data?.sys?.sunset
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    var date = new Date(unix_timestamp2 * 1000);
    // Hours part from the timestamp
    var hours = date.getHours();
    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    var seconds = "0" + date.getSeconds();

    // Will display time in 10:30:23 format
    var formattedTime_sunset = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);



    useEffect(() => {
        getweatherdetails("Delhi")
    }, [])


    
    return (
        <div className='main-container'>
            <div className='stroke-center-div'>
                <div className='grid-item-container'>
                    <div className='item-container-1'>
                        <div className='itemA-main-container'>
                            <input
                                placeholder='Search City'
                                className='search-input-box'
                                value={inputcity}
                                onChange={handlechangeinput}
                                onKeyDown={handleKeyDown}></input>
                            <div className='itemA-main-container-image'>
                                <FaSun style={{ color: 'white', fontSize: '140px' }} />
                            </div>
                            <h1 className='cityname'>{data?.name}</h1>
                            <h1 className='temp'  > {(data?.main?.temp - 273).toFixed(2)} °C</h1>
                        </div>
                    </div>
                    <div className='item-container-2'>
                        <div className='itemB-main-container'>
                            <h1 className='itembcontenth'>Today's Highlights</h1>
                            <div className='weather-component'>
                                <div className="item1 corners">
                                    <div className='grid-item-div'>Feels Like</div>
                                    <div className='grid-item-div center'><h2>{(data?.main?.feels_like - 273).toFixed(2)}</h2></div>
                                </div>
                                <div className="item2 corners">
                                    <div className='grid-item-div'>Wind Speed</div>
                                    <div className='grid-item-div center'><h2>{(data?.wind?.speed)+"m/s"}</h2></div>
                                </div>
                                <div className="item3 corners">
                                    <div className='grid-item-div'>Humidity</div>
                                    <div className='grid-item-div center'><h2>{(data?.main?.humidity)} %</h2></div>
                                </div>
                                <div className="item4 corners">
                                    <div className='grid-item-div'>Cloudliness</div>
                                    <div className='grid-item-div center'><h2>{(data?.clouds?.all)} % </h2></div>
                                </div>
                                <div className="item5 corners">
                                    <div className='grid-item-div'>Visiblity</div>
                                    <div className='grid-item-div center'><h2>{(data?.visibility/1000)}m</h2></div></div>
                                <div className="item6 corners">
                                    <div className='grid-item-div'>Sunrise/Sunset</div>
                                    <div className='grid-item-div center' ><h3>Sunrise: {formattedTime_sunrise} AM</h3></div>
                                    <div className='grid-item-div center' ><h3>Sunset: {formattedTime_sunset} PM </h3></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}
export default Weather