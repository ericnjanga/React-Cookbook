// import "./App.css";
import { RadioGroup, RadioOption } from "./components/Radio";
import { useState } from "react";

function FeedbackRadioGroup() {
  const [selected, setSelected] = useState("");
  return (
    <div className="FeedbackRadioGroup">
      {/* The API for the RadioGroup component is defined as two props: 
      selected, which is a string that matches one of the RadioOption values 
      and onChange, which is the event that gets called whenever a 
      selection changes, providing the new value as an argument. */}

      <RadioGroup onChange={setSelected} selected={selected}>
        <RadioOption value="social_media">Social Media</RadioOption>
        <RadioOption value="friends">Friends</RadioOption>
        <RadioOption value="advertising">Advertising</RadioOption>
        <RadioOption value="other">Other</RadioOption>
      </RadioGroup>
      <button className="btn btn-primary" disabled={!selected}>Submit</button>
    </div>
  );
}

export default FeedbackRadioGroup;
