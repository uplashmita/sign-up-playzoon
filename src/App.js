import logo from "./logo.svg";
import "./App.css";
import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { TiTick } from "react-icons/ti";

function App() {
	const [isPasswordVisible, setIsPasswordVisible] = useState(true);
	const [isPasswordInVisible, setIsPasswordInVisible] = useState(false);
	const [isPlayer, setIsPlayer] = useState(true);
	const [isIsSigninWithMobile, setIsSigninWithMobile] = useState(true);

	return (
		<div className="App">
			<main className="main-canvas">
				<div className="banner">
					<div className="left">
						<p className="left_heading">Select User Option</p>
						<div className="cards" onClick={() => setIsPlayer(true)}>
							<img src={img2} alt="" />
							<div>
								<div className="card_heading">Player</div>
								<div className="card_text">
									We’ll use this to sign you in or to create an
								</div>
							</div>
							{isPlayer && (
								<div className="option">
									<TiTick size={40} className="tick" />
								</div>
							)}
						</div>
						<div className="cards" onClick={() => setIsPlayer(false)}>
							<img src={img1} alt="" />
							<div>
								<div className="card_heading">Service Provider</div>
								<div className="card_text">
									We’ll use this to sign you in or to create an
								</div>
							</div>
							{!isPlayer && (
								<div className="option">
									<TiTick size={40} className="tick" />
								</div>
							)}
						</div>
						<p className="left_text">
							By signing in or creating an account, your agree with our
							<a href="">Terms &amp; Conditions</a> and{" "}
							<a href="">Privacy Statement</a>
						</p>
					</div>
					<div className="right">
						<p className="create_account">Create an account</p>
						<p className="account_text">
							Create an account if you don't have one yet.
						</p>
						<div className="boxes">
							<div className="input">
								<p className="tag">Full Name</p>
								<input
									type="text"
									name=""
									id=""
									placeholder="Enter Your Full Name"
								/>
							</div>
							<div className="input">
								<div className="num">
									<p className="tag mobile">
										{isIsSigninWithMobile ? "Mobile Number" : "Email id"}
									</p>
									<p
										className="tag signup_mail cursor-pointer"
										onClick={() => setIsSigninWithMobile((prev) => !prev)}
									>
										{isIsSigninWithMobile
											? "Sign up with Email"
											: "Sign up with Mobile"}
									</p>
								</div>
								<input
									type={`${isIsSigninWithMobile ? "number" : "email"}`}
									placeholder={`${
										isIsSigninWithMobile
											? "Enter Mobile Number"
											: "Enter Email id"
									}`}
								/>
							</div>
							<div className="input relative">
								<p className="tag">Password</p>
								<input
									type={`${isPasswordVisible ? "text" : "password"}`}
									placeholder="Password"
								/>
								<div
									onClick={() => setIsPasswordVisible((prev) => !prev)}
									className="absolute top-12 right-10"
								>
									{isPasswordVisible ? (
										<AiFillEye size={22} />
									) : (
										<AiFillEyeInvisible size={22} />
									)}
								</div>
							</div>
							<div className="input relative">
								<p className="tag">Confirm Password</p>
								{/* <input type="text" name="" id="" placeholder="Password" /> */}
								<input
									type={`${isPasswordInVisible ? "text" : "password"}`}
									placeholder="Password"
								/>
								<div
									onClick={() => setIsPasswordInVisible((prev) => !prev)}
									className="absolute top-12 right-10"
								>
									{isPasswordInVisible ? (
										<AiFillEye size={22} />
									) : (
										<AiFillEyeInvisible size={22} />
									)}
								</div>
							</div>
							<div className="input terms">
								<input type="checkbox" />
								<p className="t_c">Accept Terms &amp; Conditions</p>
							</div>
							<button>Sign Up</button>
							<p className="link_text">
								Already an Existing User? <a href="#">Click here</a>
							</p>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}

export default App;
