import './news.css';
import DefaultNavbar from 'components/DefaultNavbar';
import DefaultFooter from 'components/DefaultFooter';

const LatestNews = () => {
    return (
        <>
            {/* <div className="absolute w-full z-20" style={{marginBottom:"150px"}} >
                <DefaultNavbar />
            </div> */}
            <div id="shell" style={{marginTop:"50px"}}>
                <div id="main">
                    <div id="content">
                        <div class="box">
                            <h2><span>College News </span></h2> {/* Link to to connect to anoter page*/}
                            <div class="cl">&nbsp;</div>
                            <div class="posts">
                            <div class="post">
                                <div class="image"> <img src="" alt="" /> </div>
                                <div class="data">
                                <h4>Heading</h4>
                                <p>content </p>
                                </div>
                            </div>
                            <div class="post last">
                                <div class="image"> <a href="#"><img src="css/images/post-2.jpg" alt="" /></a> </div>
                                <div class="data">
                                <h4>Heading</h4>
                                <p>content</p>
                                </div>
                            </div>
                            <div class="cl">&nbsp;</div>
                            <div class="post">
                                <div class="image"> <a href="#"><img src="css/images/post-3.jpg" alt="" /></a> </div>
                                <div class="data">
                                <h4>Heading</h4>
                                <p>content</p>
                                </div>
                            </div>
                            <div class="post last">
                                <div class="image"> <a href="#"><img src="css/images/post-4.jpg" alt="" /></a> </div>
                                <div class="data">
                                <h4>Heading</h4>
                                <p>Content </p>
                                </div>
                            </div>
                            <div class="cl">&nbsp;</div>
                            </div>
                        </div>
                        <div class="box">
                            <h2><span>Exam News</span></h2>
                            <div class="cl">&nbsp;</div>
                            <div class="posts">
                            <div class="post">
                                <div class="image"> <a href="#"><img src="css/images/post-5.jpg" alt="" /></a> </div>
                                <div class="data">
                                <h4>Heading</h4>
                                <p>content </p>
                                </div>
                            </div>
                            <div class="post last">
                                <div class="image"> <a href="#"><img src="css/images/post-6.jpg" alt="" /></a> </div>
                                <div class="data">
                                <h4>Heading</h4>
                                <p>content </p>
                                </div>
                            </div>
                            <div class="cl">&nbsp;</div>
                            <div class="post">
                                <div class="image"> <a href="#"><img src="css/images/post-1.jpg" alt="" /></a> </div>
                                <div class="data">
                                <h4>Heading</h4>
                                <p>content</p>
                                </div>
                            </div>
                            <div class="post last">
                                <div class="image"> <a href="#"><img src="css/images/post-1.jpg" alt="" /></a> </div>
                                <div class="data">
                                <h4>Heading</h4>
                                <p>Content </p>
                                </div>
                            </div>
                            <div class="cl">&nbsp;</div>
                            </div>
                        </div>
                        <div class="box last">
                            <h2><span>Admission news</span></h2>
                            <div class="cl">&nbsp;</div>
                            <div class="posts">
                            <div class="post">
                                <div class="image"> <a href="#"><img src="css/images/post-7.jpg" alt="" /></a> </div>
                                <div class="data">
                                <h4>Heading</h4>
                                <p>content </p>
                                </div>
                            </div>
                            <div class="post last">
                                <div class="image"> <a href="#"><img src="css/images/post-8.jpg" alt="" /></a> </div>
                                <div class="data">
                                <h4>Heading</h4>
                                <p>content </p>
                                </div>
                            </div>
                            <div class="cl">&nbsp;</div>
                            <div class="post">
                                <div class="image"> <a href="#"><img src="css/images/post-9.jpg" alt="" /></a> </div>
                                <div class="data">
                                <h4><a href="#">Heading</a></h4>
                                <p>content </p>
                                </div>
                            </div>
                            <div class="post last">
                                <div class="image"> <a href="#"><img src="css/images/post-10.jpg" alt="" /></a> </div>
                                <div class="data">
                                <h4>Heading</h4>
                                <p>content </p>
                                </div>
                            </div>
                            <div class="cl">&nbsp;</div>
                            </div>
                        </div>
                        <div class="cl">&nbsp;</div>
                        </div>
                        <div id="sidebar">
                        <div class="nav-box">
                            <h2><span>CATEGORIES</span></h2>
                            <ul>
                            <li>College News</li>
                            <li>Exam News</li>
                            <li>Admission News</li>
                            <li>Exam Result</li>
                            <li>Study Abroad</li>
                            <li>Placement News</li>
                            </ul>
                        </div>
                        <div class="nav-box">
                            <h2><span>TAGS</span></h2>
                            <ul>
                            <li>Top courses</li>
                            <li>Top Exams</li>
                            <li>Top rated colleges</li>
                            <li>Study Abroad</li>
                            <li>College reviews</li>
                            <li>Skill courses</li>
                            </ul>
                        </div>
                        </div>
                        <div class="cl">&nbsp;</div>
                    </div>
            </div>
            {/* <DefaultFooter /> */}
        </>
    )
}

export default LatestNews;