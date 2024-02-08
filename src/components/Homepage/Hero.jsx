import NavMenu from "../Global/NavMenu"
function Hero() {
  return (
    <section className="heroSection">
        <NavMenu />

        <div className="heroMain">
          <div className="jecconsPhrase">
            <span >
            Engineering the Future with Excellence and British Standards.
            </span>
            <div className="expPhrase">
              <p>JECCONS Engineering Systems Ltd is a with 27 years of experience in various engineering fields. Their team, trained in Britain, adheres to British standards.</p>

              <div className="learnMoreBtn">
                <span>Learn more</span>
              </div>
            </div>
            
          </div>
          <div className="heroJeccons">
            <span>JECCONS</span>
            
          </div>
          
          
        </div>
      </section>
  )
}

export default Hero