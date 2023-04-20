import React, { useContext } from 'react';
import './sidebar.css';
import UserContext from '../../context/UserContext';
import { motion } from 'framer-motion';

function Sidebar() {

    const context = useContext(UserContext);
    const { mode } = context;


    return (
        <motion.div
            whileInView={{opacity: [0, 0, 1] }}
            transition={{ duration: 0.5 }}
            className={`sidebar theme-${mode}`}
        >
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="https://images.unsplash.com/photo-1610088441520-4352457e7095?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg" alt="" />
                <p>A technology enthusiast and a passionate learner who aims to increase
          knowledge, to secure a creative and challenging position in a
          reputable organization, to effectively utilize problem solving skills,
          while making a significant contribution to the symbolic growth and
          success of the company.</p>
            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Travel</li>
                    <li className="sidebarListItem">Gaming</li>
                    <li className="sidebarListItem">Movies</li>
                    <li className="sidebarListItem">Science</li>
                </ul>
            </div >

            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <a style={{ color: "inherit" }} href="https://www.linkedin.com/in/satyaprakash38/" target={"_blank"} rel="noreferrer" ><i className="sidebarIcon fa-brands fa-linkedin"></i></a>
                    <a style={{ color: "inherit" }} href="https://www.instagram.com/satya_prakash872/" target={"_blank"} rel="noreferrer" ><i className="sidebarIcon fa-brands fa-square-instagram"></i></a>
                    <a style={{ color: "inherit" }} href="https://www.facebook.com/satyaprakash.rajan.96" target={"_blank"} rel="noreferrer" ><i className="sidebarIcon fa-brands fa-square-facebook"></i></a>
                    <a style={{ color: "inherit" }} href="https://www.linkedin.com/in/satyaprakash38/" target={"_blank"} rel="noreferrer" ><i className="sidebarIcon fa-brands fa-square-twitter"></i></a>
                </div>
            </div>
        </motion.div >
    )
}

export default Sidebar;
