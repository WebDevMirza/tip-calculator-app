import { ChangeEventHandler, MouseEventHandler, useEffect, useRef, useState } from "react";
import "../assets/styles/card.css";

const Card = () => {
  const [error, setError] = useState(true);
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [people, setPeople] = useState(0);
  const [tipAmountPerPerson, setTAPP] = useState(0);
  const [totalAmountPerPerson, setTotalAPP] = useState(0);
  const billfocus = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (people == 0) {
      setError(true);
      return;
    }

    let tipPerPerson = (bill * tip) / 100 / people;
    setTAPP(() => {
      return tipPerPerson;
    });

    setTotalAPP(() => {
      let billPerPerson = bill / people;
      return billPerPerson + tipPerPerson;
    });

    setError(false);
  }, [bill, tip, people]);

  useEffect(() => {
    setError(false);
  }, []);

  document.querySelector("body")?.addEventListener("keydown", (e) => {
    if (e.key != "Enter") {
      return;
    }
    setBill(0);
    setTip(0);
    setPeople(0);
    if (billfocus.current) {
      billfocus.current.focus();
    }
  });

  const billAmount: ChangeEventHandler<HTMLInputElement> = (e) => {
    setBill(+e.target.value);
  };

  const tipAmount: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    document.querySelector(".btn-active")?.classList.remove("btn-active");

    let val = (e.target as HTMLButtonElement).dataset.tip;
    setTip(val == undefined ? 0 : +val);
    (e.target as HTMLButtonElement).classList.add("btn-active");
  };

  const tipAmountInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTip(+e.target.value);
  };

  const peopleAmount: ChangeEventHandler<HTMLInputElement> = (e) => {
    setPeople(+e.target.value);
  };

  const resetAll: MouseEventHandler<HTMLButtonElement> = () => {
    setBill(0);
    setTip(0);
    setPeople(0);
  };

  return (
    <>
      <div className="card-wrapper">
        <div className="bill-section">
          <div className="gocho-bill">
            <label className="bill-title" htmlFor="bill_id">
              Bill
            </label>
            <input
              ref={billfocus}
              type="number"
              name="bill"
              id="bill_id"
              min={0}
              value={bill.toString().replace(/^0+/, "")}
              placeholder="0"
              onChange={billAmount}
            />
          </div>
          <div className="gocho-tip">
            <p className="bill-title">Select Tip %</p>
            <div className="btn-group">
              <button data-tip="5" className="btn-normal" onClick={tipAmount}>
                5%
              </button>
              <button data-tip="10" className="btn-normal" onClick={tipAmount}>
                10%
              </button>
              <button data-tip="15" className="btn-normal" onClick={tipAmount}>
                15%
              </button>
              <button data-tip="25" className="btn-normal" onClick={tipAmount}>
                25%
              </button>
              <button data-tip="50" className="btn-normal" onClick={tipAmount}>
                50%
              </button>
              <input
                type="number"
                name="number"
                className="btn-custom"
                placeholder="Custom"
                onChange={tipAmountInput}
                min={0}
              />
            </div>
          </div>
          <div className="gocho-people">
            <label data-error={error ? "true" : "false"} className="bill-title" htmlFor="people_id">
              Number of People
            </label>
            <input
              className={error ? "error" : ""}
              min={0}
              type="number"
              name="people"
              id="people_id"
              value={people.toString().replace(/^0+/, "")}
              onChange={peopleAmount}
              placeholder="0"
            />
          </div>
        </div>

        {/*============== DISPLAY SECTION ============*/}

        <div className="display-section">
          <div className="amount">
            <div className="left">
              <p className="h3">Tip Amount</p>
              <p>/ person</p>
            </div>
            <div className="right">
              <p className="rate">${tipAmountPerPerson.toFixed(2).toString()}</p>
            </div>
          </div>

          <div className="total">
            <div className="left">
              <p className="h3">Total</p>
              <p>/ person</p>
            </div>
            <div className="right">
              <p className="rate">${totalAmountPerPerson.toFixed(2).toString()}</p>
            </div>
          </div>

          <div className="reset">
            <button className="btn-disabled" type="reset" onClick={resetAll}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
