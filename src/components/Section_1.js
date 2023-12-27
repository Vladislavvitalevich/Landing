
const Section_1 = () => {
    return (
        <div className="container-fluid section_1">
            <div className="container">
                <div className="head_block row align-items-center  justify-content-between">
                    <div className="col-12 col-lg-6  ps-0">
                        <p className="page_title">
                            Enter your vehicle details to receive a free valuation.
                        </p>

                        <p className="title_text">
                            If your vehicle has <b>less than 100,000 miles</b>  enter your vehicle and contact details and we will
                            contact you with a cash valuation within 24 hours.
                        </p>
                    </div>

                    <div className="col-12 col-lg-5  pe-0 text-center ">
                        <button className="btn_ shadow  border-0 mt-5 mt-lg-0">ENTER REG</button>

                        <div className="confirm text-start d-flex">
                            <input class="form-check-input col-1" type="checkbox" />
                            <p className="d-inline ps-2">
                                I confirm that the vehicle I am enquiring about has less than 100,000 miles.
                            </p>
                        </div>
                        <div>
                            <button className="btn_start border-0">
                                Get Started
                                <img src="./image/arrow_circle_up.svg" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Section_1