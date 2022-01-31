import React from "react";
import TopBar from "../../components/topbar/TopBar";
import Sidebar from "../../components/sidebar/SideBar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";


import "./home.css"



export default function Home() {
    return (
        <>
            <TopBar />
            <div className="homeContainer">
                <Sidebar />
                <Feed />
                <Rightbar />

            </div>
        </>

    );
}
