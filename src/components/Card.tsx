import "../assets/styles/card.css";

const Card = () => {
  return (
    <>
      <section className="card-wrapper">
        <div className="bill-section">
          <div className="gocho-bill">
            <label className="bill-title" htmlFor="bill_id">
              Bill
            </label>
            <input type="number" name="bill" id="bill_id" />
          </div>
          <div className="gocho-tip">
            <p className="bill-title">Select Tip %</p>
            <div className="btn-group">
              <button className="btn-normal">5%</button>
              <button className="btn-normal">10%</button>
              <button className="btn-normal">15%</button>
              <button className="btn-normal">25%</button>
              <button className="btn-normal">50%</button>
              <input type="number" name="number" className="btn-custom" placeholder="Custom" />
            </div>
          </div>
          <div className="gocho-people">
            <label className="bill-title" htmlFor="people_id">
              Number of People
            </label>
            <input type="number" name="people" id="people_id" />
          </div>
        </div>

        {/*============== DISPLAY SECTION ============*/}

        <div className="display-section">
          <div className="amount">
            <div className="left">
              <h3>Tip Amount</h3>
              <p>/ person</p>
            </div>
            <div className="right">
              <p className="rate">$0.00</p>
            </div>
          </div>

          <div className="total">
            <div className="left">
              <h3>Total</h3>
              <p>/ person</p>
            </div>
            <div className="right">
              <p className="rate">$0.00</p>
            </div>
          </div>

          <div className="reset">
            <button className="btn-disabled" type="reset">
              Reset
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;

// - A `form` tag might needed.
