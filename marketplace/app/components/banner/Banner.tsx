const Banner = () => {
    return ( 
        <div>
            <h1 className='pb-4 text-4xl font-mont font-bold'>Best Market Deals Here</h1>
            <div className="hero min-h-screen mb-20" style={{backgroundImage: "url(https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold font-mont">Hello There!</h1>
                <p className="mb-5 font-mont">Welcome to <span className=' font-courgette'>Jineepinee's</span> Marketplace - Your Ultimate Destination for your household, executive, fashion and other items you may need! You think it! We sell it!</p>
                <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
            </div>
        </div>
     );
}
 
export default Banner;