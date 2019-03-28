//Dependencies
import React from 'react'
//Styles
import "./scss/admin_dashboard.scss"
//Components
import AdminHeader from './admin_header';
import AppFooter from "../main/app_footer";
import AddProduct from './add_product';

export default class AdminDashboard extends React.Component {
    render(){
        return (
            <div className="dashboard">
                <AdminHeader />
                <AddProduct />
                <AppFooter />
            </div>
        )
    }
}