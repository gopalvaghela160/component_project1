import './creative.css';
import { FaCertificate, FaAngleDown, FaStar, FaStarHalfAlt, FaUniversity, FaHandPzointRight, FaQuoteLeft, FaFacebookF, FaTwitter, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaHandPointRight } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import first from "./image/footer.svg";
function Creative() {
    return (
        <div className="cc-center">
            <div className="container">
                <div className="cc-tital">
                    <span>READ OUR DIFFERNCE</span>
                    <h2>WHY CHOOSE CREATIVE</h2>
                </div>
                <div className="cc-info d-flex">
                    <div className="cc-box">
                        <div className="img">
                            <img src={require(`./image/read1.png`)} style={{ backgroundColor: "#F6475F" }} alt="" />
                        </div>
                        <div className="desc">
                            <h5>Industry Experts As Trainers</h5>
                            <p>Our trainers have 5+ years of industry experience coupled with extensive research and analysis.</p>
                        </div>
                    </div>
                    <div className="cc-box">
                        <div className="img">
                            <img src={require(`./image/read2.png`)} style={{ backgroundColor: "#FFBC06" }} alt="" />
                        </div>
                        <div className="desc">
                            <h5>Industry Experts As Trainers</h5>
                            <p>Our trainers have 5+ years of industry experience coupled with extensive research and analysis.</p>
                        </div>
                    </div>
                    <div className="cc-box">
                        <div className="img">
                            <img src={require(`./image/read3.png`)} style={{ backgroundColor: "#B3D369" }} alt="" />
                        </div>
                        <div className="desc">
                            <h5>Industry Experts As Trainers</h5>
                            <p>Our trainers have 5+ years of industry experience coupled with extensive research and analysis.</p>
                        </div>
                    </div>
                    <div className="cc-box">
                        <div className="img">
                            <img src={require(`./image/read4.png`)} style={{ backgroundColor: "#554DA7" }} alt="" />
                        </div>
                        <div className="desc">
                            <h5>Industry Experts As Trainers</h5>
                            <p>Our trainers have 5+ years of industry experience coupled with extensive research and analysis.</p>
                        </div>
                    </div>
                    <div className="cc-box">
                        <div className="img">
                            <img src={require(`./image/read5.png`)} style={{ backgroundColor: "#4382FF" }} alt="" />
                        </div>
                        <div className="desc">
                            <h5>Industry Experts As Trainers</h5>
                            <p>Our trainers have 5+ years of industry experience coupled with extensive research and analysis.</p>
                        </div>
                    </div>
                    <div className="cc-box">
                        <div className="img">
                            <img src={require(`./image/read6.png`)} style={{ backgroundColor: "#F94FA4" }} alt="" />
                        </div>
                        <div className="desc">
                            <h5>Industry Experts As Trainers</h5>
                            <p>Our trainers have 5+ years of industry experience coupled with extensive research and analysis.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* partners section start*/}
            <div className='container p-center'>
                <div className='p-tital'>
                    <span>STUDENT PLACEMENT</span>
                    <h2>OUR RECRUITMENT PARTNERS</h2>
                </div>
                <div className='p-info d-flex'>
                    <div className='p-box'>
                        <img src={require(`./image/p1.png`)}></img>
                    </div>
                    <div className='p-box'>
                        <img src={require(`./image/p2.png`)}></img>
                    </div>
                    <div className='p-box'>
                        <img src={require(`./image/p3.png`)}></img>
                    </div>
                    <div className='p-box'>
                        <img src={require(`./image/p4.png`)}></img>
                    </div>
                    <div className='p-box'>
                        <img src={require(`./image/p5.png`)}></img>
                    </div>
                    <div className='p-box'>
                        <img src={require(`./image/p6.png`)}></img>
                    </div>
                </div>
            </div>
            {/*  partners section end */}
            {/* Widget setion start */}
            <div classNam e='container w-center'>
                <div className='w-tital'>
                    <h5>Our Demanded Course-</h5>
                </div>
                <div className='w-info'>
                    <a>Coreldraw Training Institute In Surat</a>
                    <a>Game design training institute in surat</a>
                    <a>C programming language training institute in katargam</a>
                    <a>Advance nodejs training institute in surat</a>
                    <a>game design class in Mota Varachha</a>
                    <a>codeigniter training course</a>
                    <a>Graphics design training in katargam</a>
                    <a>Best flutter training institute</a>
                    <a>Graphics design training course</a>
                    <a>Blender 3d design course</a>
                    <a>Creo parametrics mechanical training course</a>
                    <a>computer institutes in yogichowk</a>
                    <a>mechanical engineering training institute in Mota Varachha</a>
                    <a>Maya animation training institute</a>
                    <a>Advance Unity  training institute in surat</a>
                    <a>PHP training institute in varachha</a>
                    <a>Advance react js training institute in surat</a>
                    <a>spoken english class in adajan</a>
                    <a>Latest technology course</a>
                </div>
            </div>
            {/* Widget setion end */}
            {/* footer section start */}
            <div className="space">
                <div className="footer">
                    <div className="container">
                        <div className="row d-flex">
                            <div className="box" style={{ width: "380px" }}>
                                <div className="logo">
                                    <a href=""><img src={first} alt="" /></a>
                                </div>
                                <p>Creative Design and Multimedia Institute is leading computer training institute in surat. We offers government approved computer training courses in Surat.</p>
                                <h6>Follow Us On</h6>
                                <ul className='social'>
                                    <li><a href=""><FaFacebookF /></a></li>
                                    <li><a href=""><FaTwitter /></a></li>
                                    <li><a href=""><TiSocialGooglePlus /></a></li>
                                    <li><a href=""><FaLinkedin /></a></li>
                                    <li><a href=""><FaInstagram /></a></li>
                                    <li><a href=""><AiOutlineYoutube /></a></li>
                                    <li><a href=""><FaWhatsapp /></a></li>
                                </ul>
                            </div>
                            <div className="f-box" style={{ width: "255px" }}>
                                <h6 style={{ color: "White" }}>Feature links</h6>
                                <ul className='links'>
                                    <li><a href=""><FaHandPointRight style={{ marginRight: "10px" }} />About us</a></li>
                                    <li><a href=""><FaHandPointRight style={{ marginRight: "10px" }} />Blogs</a></li>
                                    <li><a href=""><FaHandPointRight style={{ marginRight: "10px" }} />Join Us</a></li>
                                    <li><a href=""><FaHandPointRight style={{ marginRight: "10px" }} />Company Login</a></li>
                                    <li><a href=""><FaHandPointRight style={{ marginRight: "10px" }} />Certificate Verification</a></li>
                                </ul>
                            </div>
                            <div className="f-box">
                                <h6 style={{ color: "White" }}>Contact US</h6>
                                <div className="head">
                                    <h6><a href="">HEAD OFFICE - YOGICHOWK</a></h6>
                                    <span>401-404, 4<sup>th</sup> Floor, City Center Complex, Nr. Yogichowk, Varachha, Surat.</span>
                                    <div className='d-flex align-center'>
                                        <p>Mo: </p>
                                        <a href="">+91 90333 16003</a>
                                    </div>
                                    <h6><a href=''>Other Branches</a> </h6>
                                    <ul className='branch'>
                                        <li><a href=""><FaUniversity style={{ marginRight: "10px" }} />Katargam</a></li>
                                        <li><a href=""><FaUniversity style={{ marginRight: "10px" }} />Mota varachha</a></li>
                                        <li><a href=""><FaUniversity style={{ marginRight: "10px" }} />Adajan</a></li>
                                        <li><a href=""><FaUniversity style={{ marginRight: "10px" }} />Navsari</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="copyright">
                <div className="container">
                    <p>© 2023 All Rights Reserved by Creative Design & Multimedia Institute.</p>
                </div>
            </div>
            {/* footer section end */}
        </div>



    );
}
export default Creative;



































// <div className='container'>
//     <div className='cc-center'>
//         <div className='cc-tital'>
//             <span>READ OUR DIFFERENCE</span>
//             <h2>WHY CHOOSE CREATIVE</h2>
//         </div>
//         <div className='cc-info d-flex'>
//             <div className='cc-box'>
//                 <div className='cc-image'>
//                     <img src={require(`./image/read1.png`)}></img>
//                 </div>
//                 <div className='cc-content'>
//                     <h5>Industry Experts As Trainers</h5>
//                     <p>Our trainers have 5+ years of industry experience coupled with extensive research and analysis.</p>
//                 </div>
//             </div>
//             <div className='cc-box'>
//                 <div className='cc-image'>
//                     <img src={require(`./image/read1.png`)}></img>
//                 </div>
//                 <div className='cc-content'>
//                     <h5>Industry Experts As Trainers</h5>
//                     <p>Our trainers have 5+ years of industry experience coupled with extensive research and analysis.</p>
//                 </div>
//             </div>
//             <div className='cc-box'>
//                 <div className='cc-image'>
//                     <img src={require(`./image/read1.png`)}></img>
//                 </div>
//                 <div className='cc-content'>
//                     <h5>Industry Experts As Trainers</h5>
//                     <p>Our trainers have 5+ years of industry experience coupled with extensive research and analysis.</p>
//                 </div>
//             </div>
//             <div className='cc-box'>
//                 <div className='cc-image'>
//                     <img src={require(`./image/read1.png`)}></img>
//                 </div>
//                 <div className='cc-content'>
//                     <h5>Industry Experts As Trainers</h5>
//                     <p>Our trainers have 5+ years of industry experience coupled with extensive research and analysis.</p>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>