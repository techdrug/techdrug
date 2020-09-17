import React from 'react'

class Navbar extends React.Component {
  render() {
    return (
    	 <header id="header" className="fixed-top ">
		    <div className="container d-flex align-items-center">

	    	<h1 className="logo mr-auto"><a href="index.html">Tech Drug</a></h1>
		     
     		<a href="#" className="logo mr-auto"><img src="assets/img/logo.png" alt="" className="img-fluid"/></a>

		      <nav className="nav-menu d-none d-lg-block">
		        <ul>
		          <li className="active"><a href="index.html">Home</a></li>
		          <li><a href="#about">About</a></li>
  		          <li className="drop-down"><a href="">Services</a>
		            <ul>
		              <li><a href="#">Web Development</a></li>
		              <li className="drop-down"><a href="#">Design</a>
		                <ul>
		                  <li><a href="#">Web Design</a></li>
		                  <li><a href="#">Web ui changes</a></li>
		                  <li><a href="#">Design Wireframing & Mockup</a></li>
		                  <li><a href="#">Psd to Html</a></li>
		                  <li><a href="#">Psd to wordpress</a></li>
		                </ul>
		              </li>
		              <li><a href="#">Mobile Development</a></li>
		              <li><a href="#">Api Development</a></li>
		              <li><a href="#">Laravel Exper</a></li>
		            </ul>
		          </li>
		          <li><a href="#portfolio">Portfolio</a></li>
		          <li><a href="#team">Team</a></li>
		          <li><a href="#contact">Contact</a></li>
		        </ul>
		      </nav>
		      <a href="#about" className="get-started-btn scrollto">Get Started</a>
		    </div>
		  </header>
    	);
	}
}
export default Navbar;