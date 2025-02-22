import React from 'react'

function DesignSystem() {
  return (
    <div className="container" style={{border: "1px solid white"}}>
        <h1 className="text-white uppercase"
            style={{marginBottom: "3rem"}}>Design System</h1>
        <section>
            <h2 className="text-white uppercase"><span>01</span> colors</h2>
            <div className="flex" style={{marginTop: "2.125rem"}}>
                <div style={{flexGrow: "1"}}>
                    <div className="text-white" 
                    style={{border: "1px solid white", 
                            padding: "3rem 15rem 1rem 1rem",
                            marginBottom: "1rem"}}>#0B0D17</div>
                    <p className="text-white"><span className="text-accent"
                             style={{marginRight: "3em"}}>RGB</span>11, 13, 23</p>
                    <p className="text-white"><span className="text-accent"
                             style={{marginRight: "3em"}}>HSL</span>230, 35%, 7%</p>
                </div>

                <div style={{flexGrow: "1"}}>
                    <div className="text-dark bg-accent" 
                    style={{border: "1px solid white", 
                            padding: "3rem 15rem 1rem 1rem",
                            marginBottom: "1rem"}}>#0B0D17</div>
                    <p className="text-white"><span className="text-accent"
                             style={{marginRight: "3em"}}>RGB</span>208, 214, 249</p>
                    <p className="text-white"><span className="text-accent"
                             style={{marginRight: "3em"}}>HSL</span>231, 77%, 90%</p>
                </div>

                <div style={{flexGrow: "1"}}>
                    <div className="text-dark bg-white" 
                    style={{border: "1px solid white", 
                            padding: "3rem 15rem 1rem 1rem",
                            marginBottom: "1rem"}}>#0B0D17</div>
                    <p className="text-white"><span className="text-accent"
                             style={{marginRight: "3em"}}>RGB</span>255, 255, 255</p>
                    <p className="text-white"><span className="text-accent"
                             style={{marginRight: "3em"}}>HSL</span>0, 0%, 100%</p>
                </div>
            </div>
        </section>
    </div>
  )
}

export default DesignSystem