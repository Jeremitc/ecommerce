'use client'

import ContentForm from "@/app/components/ContentDashboard";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import "@/app/globals.css";


export default function FormPage() {

    return (
        <div>
            <section>
                <Navbar />
            </section>
            <section>
                <ContentForm />
            </section>
            <section>
                <Footer />
            </section>
        </div>
    );
}
