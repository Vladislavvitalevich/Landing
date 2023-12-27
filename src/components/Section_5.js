import Card from "./Card"

const Section_5 = () => {
    const data = [
        "Sell your car right away",
        "Secure payment & release of ownership",
        "Sales are final",
        "Instant Payment",
        "No Fees",
        "No Strangers Visiting Your Home",
        "No Time Wasters & Tyre Kickers",
        "We'll take your car as it is",
    ]

    const data_2 = [
        "We'll take your car as it is",
        "Cash in hand and more of it",
        "Transparent and fair appraisal",
        "Know the price upfront",
        "Easy and convenient",
        "Outstanding Finance Settled",
        "No Bouncing Cheques",
        "Avoid Uninsured Test Drives",
    ]

    const Block = ({ data }) => {
        return (
            <div className="col-12 col-lg-4">
                <ul>
                    {data.map((i, index) =>
                        <li key={index}>{i}</li>
                    )}
                </ul>
            </div>
        )
    }
    return (
        <div className="container section_5">
            <div className="row list d-flex justify-content-around">
                <Block data={data} />
                <Block data={data_2} />
            </div>

            <div className="row">
                <Card
                    title={'Trade In'}
                    text={"Don't let dealers give you less at trade-in, take a look at why CashForCars is a great way to get more money for your car! There are many great reasons to choose us over a standard dealer trade-in!"} />
                <Card
                    title={'Sell On Your Own'}
                    text={"Selling a car on your own can be unpredictable and stressful, with CashForCars you can sell your car as soon as you're ready. Check out why we're better than selling it yourself!"} />
            </div>

            <div className="row customer d-flex justify-content-around ">
                <div className="col-12 col-lg-6">
                    <p className="customer_comment">
                        What our customers <br />have been saying
                    </p>
                </div>
                <div className="col-12 col-lg-6">
                    <div className="card_aqua">
                        <p className="card_aqua_text">
                            "Can't recommend them enough. Their fast, friendly service was ideal,
                            and they offered us a better price than other trade in sites..."
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Section_5