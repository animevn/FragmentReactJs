import React, {useState} from "react";
import {content} from "./Constants";

function Home() {
  const innital = {option1:"Yes", option2:"No", option3:"None"};
  const [radio, setRadio] = useState(innital.option3);
  const [open, setOpen] = useState(false);
  const[context, setContext] = useState(false);

  function handleChange(event) {
    const value = event.target.value;
    setRadio(value);
  }

  function onOpenClick(event) {
    event.preventDefault();
    setOpen(old=>!old);
  }

  function onSelect(event) {
    event.preventDefault();
    setContext(old=>!old);
  }

  return (
    <div className="container mt-3">
      <div className="row col-xl-7 col-lg-8 col-md-10 col-sm-12 col-12 mx-auto my-3 bg-success
                      py-2 rounded-lg" style={{"display": open ? "": "none"}}>
        <div className="text-white">Do you like this?</div>

        <div className="custom-control custom-radio custom-control-inline ml-5">
          <input type="radio" id="radio1" className="custom-control-input" onChange={handleChange}
                 value={innital.option1} checked={radio === innital.option1}/>

          <label className="custom-control-label text-white" htmlFor="radio1">Yes</label>
        </div>

        <div className="custom-control custom-radio custom-control-inline">
          <input type="radio" id="radio2" className="custom-control-input" onChange={handleChange}
                 value={innital.option2} checked={radio === innital.option2}/>

          <label className="custom-control-label text-white" htmlFor="radio2">No</label>
        </div>
      </div>

      <div className="row col-xl-7 col-lg-8 col-md-10 col-sm-12 col-12 mx-auto my-3 px-0">
        <div className="d-flex flex-column w-25">
          <img className="img-thumbnail rounded-lg w-75 h-auto mt-2"
               src="images/beatles_anthology_box.webp" alt="beatles"/>
          <button className="btn btn-outline-success mt-4 w-75" onClick={onOpenClick}>
            {open ? "Close" : "Open"}
          </button>
        </div>

        <div className="w-75">
          <div className="container pr-0">
            <h2>Cry For A Shadow</h2>
            <p className={"text-justify " + (context? "text-success" : "text-dark")}
               onContextMenu={onSelect}>{content}</p>
          </div>
        </div>
      </div>

    </div>
  )
}
export default Home;