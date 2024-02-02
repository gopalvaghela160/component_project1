import './counter.css';
function Counter() {

    return (
        <div className="container">
            <div className="co-center">
                <div className='co-img'>
                    <img src={require(`./image/k1.jpeg`)}></img>
                </div>
                <div className='d-flex co-info'>
                    <div className="box1">
                        <div className='co-icon'><img src={require(`./image/c4.png`)}></img></div>
                        <div className='co-text'>
                            <h3>18000+</h3>
                            <p>HAPPY STUDENTS</p>
                        </div>
                    </div>
                    <div className="box1">
                        <div><img src={require(`./image/c2.png`)}></img></div>
                        <div className='co-text'>
                            <h3>10+</h3>
                            <p>CERTIFICATION APPROVAL</p>
                        </div>
                    </div>
                    <div className="box1">
                        <div><img src={require(`./image/c1.png`)}></img></div>
                        <div  className='co-text'>
                            <h3>100+</h3>
                            <p>CERTIFIED TEACHERS</p>
                        </div>
                    </div>
                    <div className="box1">
                        <div><img src={require(`./image/c3.png`)}></img></div>
                        <div  className='co-text'>
                            <h3>12000+</h3>
                            <p>STUDENTS PLACED</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Counter;