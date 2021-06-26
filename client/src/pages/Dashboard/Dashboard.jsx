import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import DashboardHeader from '../../components/DashboardHeader/DashboardHeader'
import DashboardOverview from './DashboardOverview/DashboardOverview'
import Footer from '../../components/Footer/Footer'


export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <Header/>
                <DashboardHeader/>
                <DashboardOverview/>
                <Footer/>
            </div>
        )
    }
}
