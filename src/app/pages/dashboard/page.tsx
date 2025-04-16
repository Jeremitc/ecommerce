'use client'

import ContentDashboard from "@/app/components/ContentDashboard";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import Carrusel from "@/app/components/Carrusel";
import "@/app/globals.css";

export default function DashboardPage(){

    return(
        <div className="container">
            <section>
            <Navbar/>
            </section>
            <h1>Dashboard</h1>
            <Carrusel/>
            <section>
            <ContentDashboard/>
            </section>
            <section>
            <Footer/>
            </section>
        </div>
    )
}