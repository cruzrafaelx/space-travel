import React from 'react'

function DesignSystem() {
  return (
    <div className="container">
        <h1 className="text-white uppercase" style={{margin: "4rem 0"}}>Design System</h1>
        <section>
            <h2 className="numbered-title"><span>01</span> colors</h2>
            <div className="flex">
                <div style={{flexGrow: "1"}}>
                    <div className="text-white" 
                    style={{border: "1px solid white", 
                            padding: "3rem 15rem 1rem 1rem",
                            marginBottom: "2rem"}}>#0B0D17</div>
                    <p className="text-white"><span className="text-accent"
                             style={{marginRight: "3em"}}>RGB</span>11, 13, 23</p>
                    <p className="text-white"><span className="text-accent"
                             style={{marginRight: "3em"}}>HSL</span>230, 35%, 7%</p>
                </div>

                <div style={{flexGrow: "1"}}>
                    <div className="text-dark bg-accent" 
                    style={{border: "1px solid white", 
                            padding: "3rem 15rem 1rem 1rem",
                            marginBottom: "2rem"}}>#0B0D17</div>
                    <p className="text-white"><span className="text-accent"
                             style={{marginRight: "3em"}}>RGB</span>208, 214, 249</p>
                    <p className="text-white"><span className="text-accent"
                             style={{marginRight: "3em"}}>HSL</span>231, 77%, 90%</p>
                </div>

                <div style={{flexGrow: "1"}}>
                    <div className="text-dark bg-white" 
                    style={{border: "1px solid white", 
                            padding: "3rem 15rem 1rem 1rem",
                            marginBottom: "2rem"}}>#0B0D17</div>
                    <p className="text-white"><span className="text-accent"
                             style={{marginRight: "3em"}}>RGB</span>255, 255, 255</p>
                    <p className="text-white"><span className="text-accent"
                             style={{marginRight: "3em"}}>HSL</span>0, 0%, 100%</p>
                </div>
            </div>
        </section>

        <section id="typography flex interactive-elements" style={{margin: "4rem 0"}}>
            <h2 className="numbered-title"><span>02 </span>Typography</h2>
            <div className="flex text-white">
                <div className="flow" 
                style={{flexBasis: "100%", "--flow-space": "2rem"}}>
                    <div> 
                        <p className="fs-200 text-accent">Heading 1 - Bellefair Regular - 150px</p>
                        <p className="fs-900 ff-serif uppercase">Earth</p>
                    </div>
                    <div> 
                        <p className="fs-200 text-accent">Heading 2 - Bellefair Regular - 100px</p>
                        <p className="fs-800 ff-serif uppercase">Venus</p>
                    </div>
                    <div> 
                        <p className="fs-200 text-accent">Heading 3 - Bellefair Regular - 56px</p>
                        <p className="fs-700 ff-serif uppercase">Jupiter & Saturn</p>
                    </div>
                    <div> 
                        <p className="fs-200 text-accent">Heading 4 - Bellefair Regular - 32px</p>
                        <p className="fs-600 ff-serif uppercase">Uranus, Neptune, & Pluto</p>
                    </div>
                    <div> 
                        <p className="fs-200 text-accent">Heading 5 - Barlow Condensed Regular - 28px - 4.75 Character Space</p>
                        <p className="fs-500 ff-sans-cond">So, you want to travel to space</p>
                    </div>
                
                </div>
                
                <div className="flow" style={{flexBasis: "100%", "--flow-space": "2rem"}}>
                    <div> 
                        <p className="fs-200 text-accent">Subheading 1 - Bellefair Regular - 28px</p>
                        <p className="fs-400 ff-serif uppercase">384,400 km</p>
                    </div>
                    <div> 
                        <p className="fs-200 text-accent">Subheading 2 - Barlow Condensed Regular - 14px - 2.35 Character Space</p>
                        <p className="fs-200 ff-sans-cond uppercase">Avg. Distance</p>
                    </div>
                    <div> 
                        <p className="fs-200 text-accent">Nav Text - Barlow Condensed Regular - 16px - 2.7 Character Space</p>
                        <p className="fs-300 ff-sans-cond uppercase">Europa</p>
                    </div>
                    <div> 
                        <p className="fs-200 text-accent">Body Text</p>
                        <p className="fs-300 ff-sans">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. </p>
                    </div>
                </div>
            </div>
        </section>

        <section id="typography" style={{margin: "4rem 0"}}>
            <h2 className="numbered-title"><span>03 </span>Interactive Elements</h2>

            {/* Navigation */}
            <div className="flow" style={{"--flow-space": "6rem"}}>
                <nav>
                    <ul className="primary-nav underline-indicators flex">
                        <li className="active"><a href="#" className="uppercase text-white letter-spacing-2"><span>00</span>Active</a></li>
                        <li><a href="#" className="uppercase text-white letter-spacing-2"><span>01</span>Hovered</a></li>
                        <li><a href="#" className="uppercase text-white letter-spacing-2"><span>02</span>Idle</a></li>
                    </ul>
                </nav>

                <div className="primary-tabs flex underline-indicators">
                    <button aria-selected="true" className="uppercase active ff-sans-cond letter-spacing-2 text-white bg-dark">Moon</button>
                    <button aria-selected="false" className="uppercase ff-sans-cond letter-spacing-2 text-accent bg-dark">Mars</button>
                    <button aria-selected="false" className="uppercase ff-sans-cond letter-spacing-2 text-accent bg-dark">Europa</button>
                </div>

                <div className="dot-indicators flex">
                    <button aria-selected="true"><span className="sr-only">slide title</span></button>
                    <button aria-selected="false"><span className="sr-only">slide title</span></button>
                    <button aria-selected="false"><span className="sr-only">slide title</span></button>
                </div>

                <div className="number-indicators flex">
                    <button aria-selected="true" className="bg-dark text-white">1</button>
                    <button aria-selected="false" className="bg-dark text-white">2</button>
                    <button aria-selected="false" className="bg-dark text-white">3</button>
                </div>
            </div>

            <div>
                <button className="large-button bg-white text-dark fs-600 ff-serif uppercase">explore</button>
            </div>
        </section>
    </div>
  )
}

export default DesignSystem