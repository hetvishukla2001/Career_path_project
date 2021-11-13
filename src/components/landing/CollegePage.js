// import './CollegenameApi';
// // import './CourseName';
// import './CollegePage.css';
import Tab from "@material-tailwind/react/Tab";
import TabList from "@material-tailwind/react/TabList";
import TabItem from "@material-tailwind/react/TabItem";
import TabContent from "@material-tailwind/react/TabContent";
import TabPane from "@material-tailwind/react/TabPane";


import data from '../../school.jsx';
import { useState } from "react";

const CollegePage = () => { 
    const [openTab, setOpenTab] = useState(1);

    return (

        <Tab>
            <TabList color="lightBlue">
                <TabItem
                    onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(1);
                    }}
                    ripple="light"
                    active={openTab === 1 ? true : false}
                    href="tabItem"
                >
                    Info
                </TabItem>
                <TabItem
                    onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(2);
                    }}
                    ripple="light"
                    active={openTab === 2 ? true : false}
                    href="tabItem"
                >
                    Course & Fees
                </TabItem>
                <TabItem
                    onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(3);
                    }}
                    ripple="light"
                    active={openTab === 3 ? true : false}
                    href="tabItem"
                >
                    Faculty
                </TabItem>
                <TabItem
                    onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(4);
                    }}
                    ripple="light"
                    active={openTab === 4 ? true : false}
                    href="tabItem"
                >
                    Faculty
                </TabItem>
                <TabItem
                    onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(5);
                    }}
                    ripple="light"
                    active={openTab === 5 ? true : false}
                    href="tabItem"
                >
                    Placement
                </TabItem>
                <TabItem
                    onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(6);
                    }}
                    ripple="light"
                    active={openTab === 6 ? true : false}
                    href="tabItem"
                >
                    Hostel
                </TabItem>
                <TabItem
                    onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(7);
                    }}
                    ripple="light"
                    active={openTab === 7 ? true : false}
                    href="tabItem"
                >
                    Reviews
                </TabItem>
            </TabList>

            <TabContent>
                <TabPane active={openTab === 1 ? true : false}>
                    <p>
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that things
                        could be at. So when you get something that has the name Kanye
                        West on it, it’s supposed to be pushing the furthest
                        possibilities. I will be the leader of a company that ends up
                        being worth billions of dollars, because I got the answers. I
                        understand culture. I am the nucleus.
                    </p>
                </TabPane>
                <TabPane active={openTab === 2 ? true : false}>
                    <p>
                        I will be the leader of a company that ends up being worth
                        billions of dollars, because I got the answers. I understand
                        culture. I am the nucleus. I think that’s a responsibility that
                        I have, to push possibilities, to show people, this is the level
                        that things could be at. I think that’s a responsibility that I
                        have, to push possibilities, to show people, this is the level
                        that things could be at.
                    </p>
                </TabPane>
                <TabPane active={openTab === 3 ? true : false}>
                    <p>
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that things
                        could be at. So when you get something that has the name Kanye
                        West on it, it’s supposed to be pushing the furthest
                        possibilities. I will be the leader of a company that ends up
                        being worth billions of dollars, because I got the answers. I
                        understand culture. I am the nucleus.
                    </p>
                </TabPane>
                <TabPane active={openTab === 4 ? true : false}>
                    <p>
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that things
                        could be at. So when you get something that has the name Kanye
                        West on it, it’s supposed to be pushing the furthest
                        possibilities. I will be the leader of a company that ends up
                        being worth billions of dollars, because I got the answers. I
                        understand culture. I am the nucleus.
                    </p>
                </TabPane>
                <TabPane active={openTab === 5 ? true : false}>
                    <p>
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that things
                        could be at. So when you get something that has the name Kanye
                        West on it, it’s supposed to be pushing the furthest
                        possibilities. I will be the leader of a company that ends up
                        being worth billions of dollars, because I got the answers. I
                        understand culture. I am the nucleus.
                    </p>
                </TabPane>
                <TabPane active={openTab === 6 ? true : false}>
                    <p>
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that things
                        could be at. So when you get something that has the name Kanye
                        West on it, it’s supposed to be pushing the furthest
                        possibilities. I will be the leader of a company that ends up
                        being worth billions of dollars, because I got the answers. I
                        understand culture. I am the nucleus.
                    </p>
                </TabPane>
                <TabPane active={openTab === 7 ? true : false}>
                    <p>
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that things
                        could be at. So when you get something that has the name Kanye
                        West on it, it’s supposed to be pushing the furthest
                        possibilities. I will be the leader of a company that ends up
                        being worth billions of dollars, because I got the answers. I
                        understand culture. I am the nucleus.
                    </p>
                </TabPane>
            </TabContent>
        </Tab>
    );
}

export default CollegePage;