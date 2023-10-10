import { Button } from "react-bootstrap";

// import debug from "debug";
import { useNavigate } from "react-router-dom";

// const log = debug("findcademy:pages:OrderHistoryPage");

export default function TempLandingPage() {
	const navigate = useNavigate();

	// const handleCheckToken = async () => {
	// 	const expDate = await checkToken();
	// 	log(expDate);
	// };

	return (
		<>
		<br></br>
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-12">
          <div className="header-intro">
            <h4>Lorem Ipsum is simply dummy text...</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since. 
            </p>
          </div>
        </div>
        <div className="col-lg-6 col-12">
          <div className="header-img text-center">
            <img
              src="https://images.pexels.com/photos/3831181/pexels-photo-3831181.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Header Image"
              className="rounded-circle"
            />
          </div>
        </div>
      </div>
		
    </div>
	<div className="container">
	<div className="row">
			<div className="services">
				<div className="col-12">
					<h5>Our Services</h5>
					<h2>Services We Provide</h2>
					<p>Sharing financial literacy tips and tricks to get you through your peasantlike lifestyles.</p>
				</div>
			</div>
		</div>
		<div className="row">
			<div className="col-lg-4 col-md-6 col-12">
				<h3>01</h3>
				<h4>Course creation</h4>
				<p>For people who wish to share their knowledge</p>
			</div>
			<div className="col-lg-4 col-md-6 col-12">
				<h3>02</h3>
				<h4>Subscription based learning</h4>
				<p>Pay money to learn to make money</p>
			</div>
			<div className="col-lg-4 col-md-6 col-12">
				<h3>03</h3>
				<h4>Improve your digital footprint</h4>
				<p>Spread your name throughout the financial market circle</p>
			</div>
		</div>
	</div>
	</>
  );
}
