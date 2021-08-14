import React from 'react'
import './About.css'

const About = () => {
    return (
        <div>
            {/* <div className='block' style={{height: 200, marginTop: 50, top: 'calc(50% - 273px/2 - 1274.5px)', background: '#FCDD3A',}}>
                <h1 className='title2' style={{position: 'relative', top:80}}>about us</h1>
            </div> */}
            <div className='block' style={{height:250, backgroundColor:'#99ddff', marginBottom:30}}>
                <h1 className='title3' style={{position:'relative', top:'45%'}}>about us</h1>
            </div>
            {/* <div className='row' style={{position: 'relative', top: 'calc(50% - 273px/2 - 948.5px)', backgroundColor:'white'}}>
                <div className='column1' style={{backgroundColor:'white', height:450}}>
                    <div className='block' style={{position:'absolute',top:10, width:'70%', height:'80%', backgroundColor:'#7EB6E9'}}/>
                    <img src="https://i.guim.co.uk/img/media/6bc25cd06762b8a59161d2b7af6248b0ccefb646/356_554_3235_1941/master/3235.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=a2a9d9d462f90d68812776e86674bbb0" alt="" className='aboutImg' />
                </div>
                <div className='column2' style={{backgroundColor:'white'}}>
                    <h2 className='aboutHeadding'>give life to reading</h2>
                    <p>There is a saying "A house without books is like a body without a soul". Because, books are not simply rectangular blocks, inside are countless words. But each seemingly inanimate book is a soul. We will spread our love of books to people who share the same passion, more than those who don't like reading at all. We will propagate to the community that books contribute to the formation of human personality and help people improve their knowledge.</p>
                </div>
            </div>
            <div className='row' style={{position: 'relative', top: 'calc(50% - 273px/2 - 948.5px)', backgroundColor:'white'}}>
                <div className='column2' style={{backgroundColor:'white', textAlign:'right'}}>
                    <h2 className='aboutHeadding'>seed of knowledge</h2>
                    <p>Books are the primary source of knowledge and enhance our horizon. Experience gathered in life also provides us guideline and wisdom to broaden our horizon.
                        Both are excellent sources of knowledge and unparalleled sources of great wisdom.
                        Without reading, we cannot home our brain. Without experiencing things we cannot learn how to deal with difficulties.  
                        Without reading books we can't become wise enough to gather the right experience and lessons in our life.</p>
                </div>
                <div className='column1' style={{height:350, backgroundColor:'white'}}>
                    <div className='block' style={{position:'absolute',top:10, left:170, width:'75%', height:'75%', backgroundColor:'#FFEB84'}}/>
                    <img src="https://d2eohwa6gpdg50.cloudfront.net/wp-content/uploads/sites/8/2021/03/11120706/joel-muniz-XqXJJhK-c08-unsplash-min-1350x900.jpg" alt="" className='aboutImg' style={{top:50, width:450}}/>
                </div>
            </div>
            <div className='block' style={{backgroundColor:'#B3D9FF', height:700}}>
                <h2 style={{position:'relative', marginTop:30}}>our book shop</h2>
                <div class='slider-container'>
                    <div className='menu'>
                        <label htmlFor="slide-dot-1"></label>
                        <label htmlFor="slide-dot-2"></label>
                        <label htmlFor="slide-dot-3"></label>
                    </div>
                    <input id="slide-dot-1" type="radio" name="slides" defaultChecked/>
                        <div class="slide slide-1"></div>                    
                    <input id="slide-dot-2" type="radio" name="slides"/>
                        <div class="slide slide-2"></div>
                    <input id="slide-dot-3" type="radio" name="slides"/>
                        <div class="slide slide-3"></div>
                </div>
            </div> */}
            <h1 className='title2' style={{textAlign:'center', fontSize:25}}>our team</h1>
            <div className='row'>
                <div className='column'>
                    <div className='card'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK4c_lXzfD_8hMdLR8LSVOanf2bhADHCwV_mG_XvGHYuP_XLas6x_3ku8eiCz5r3PV7Xg&usqp=CAU" alt="Jane" style={{width:'100%'}}/>
                        <div className='container'>
                            <h2>Jane Doe</h2>
                            <p>CEO & Founder</p>
                            <p>Some text that describes me.</p>
                            <p>jane@example.com</p>
                        </div>
                    </div>
                </div>

                <div className='column'>
                    <div className='card'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK4c_lXzfD_8hMdLR8LSVOanf2bhADHCwV_mG_XvGHYuP_XLas6x_3ku8eiCz5r3PV7Xg&usqp=CAU" alt="Mike" style={{width:'100%'}}/>
                        <div className='container'>
                            <h2>Mike Ross</h2>
                            <p>Bookshop Manager</p>
                            <p>Some text that describes me.</p>
                            <p>Mike@example.com</p>
                        </div>
                    </div>
                </div>

                <div className='column'>
                    <div className='card'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK4c_lXzfD_8hMdLR8LSVOanf2bhADHCwV_mG_XvGHYuP_XLas6x_3ku8eiCz5r3PV7Xg&usqp=CAU" alt="Casey" style={{width:'100%'}}/>
                        <div className='container'>
                            <h2>Casey Lee</h2>
                            <p>Marketing Analyst</p>
                            <p>Some text that describes me.</p>
                            <p>Casey@example.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
