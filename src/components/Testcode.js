import React, { Component } from 'react'

export class Testcode extends Component {
    constructor(props) {
        super(props)

        this.state = {
            //
        }
        const axios=""
        const Apikey = "fe5556db25627586fc8d128d81142f93"
        const getweatherdetails = (inputcity) => {
            if (!inputcity) return
            const apiurl = (`https://api.openweathermap.org/data/2.5/weather?q=${inputcity}&appid=${Apikey}`)
            axios.get(apiurl).then((res) => {
                this.setState(()=>{
                    cityname = 
                })
            }).catch((err) => {
                alert('Error', err)
            })
        }

    }



    render() {
        return (
            <div>

                <h2>cityname</h2>
                <h2>temp</h2>
                <h2>humidity</h2>
                <h2>wind speed</h2>
                <h2>uvindex</h2>
                <h2>sunrise & sunset</h2>
            </div>
        )
    }
}

export default Testcode