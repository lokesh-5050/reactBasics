import React, { useState, useEffect } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");
  const [times, setTime] = useState("Time Now");

  // const [btnText, setBtnText] = useState("Enable Dark Mode");
  // const [theme, setTheme] = useState({
  //   width: "70%",
  //   marginTop: "2vmax",
  //   color: "black",
  //   backgroundColor: "white",
  // });

  // const toogleBtn = () => {
  //   if (theme.color == "black") {
  //     setTheme({
  //       width: "70%",
  //       marginTop: "2vmax",
  //       color: "white",
  //       backgroundColor: "#333",
  //     });
  //     setBtnText("Enable Light Mode");
  //   } else {
  //     setTheme({
  //       width: "70%",
  //       marginTop: "2vmax",
  //       color: "black",
  //       backgroundColor: "white",
  //     });
  //     setBtnText("Enable Dark Mode");
  //   }
  // };

  /*2nd loghic for darkMode*/

  const [theme, setTheme] = useState("Light");
  const [btnText, setBtnText] = useState("Enable Dark Mode");
  const changeTheme = () => {
    if (theme === "Light") {
      setTheme("Dark");
      setBtnText("Enable Light Mode");
    } else {
      setTheme("Light");
      setBtnText("Enable Dark Mode");
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toUpperCase = () => {
    console.log(text);
    setText(text.toUpperCase());
  };
  const toLowerCase = () => {
    console.log(text);
    setText(text.toLowerCase());
  };
  const copyToClip = (e) => {
    console.log(e);
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const handleChange = (e) => {
    // console.log(e.target.value);
    setText(e.target.value);
  };
  const removeAll = () => {
    setText("");
  };
  const time = () => {
    let today = new Date().toLocaleTimeString();
    setTime(today);
  };
  setInterval(time, 1000);

  const handleRemoveExtraSpaces = () => {
    let ourValue = document.getElementById("myBox").value;
    let newtext = ourValue.split(/[ ]+/)
    setText(newtext.join(" "))
    
  };

  // const moveToLeft = () =>{
  //   let flag = 0
  //   if(flag == 0){
  //     document.querySelector(".cir").style.transition =  "all cubic-bezier(0.19, 1, 0.22, 1) 1s"
  //     document.querySelector(".cir").style.marginLeft = "55px"
  //     flag++
  //   }else{
  //     document.querySelector(".cir").style.transition =  "all cubic-bezier(0.19, 1, 0.22, 1) 1s"
  //     document.querySelector(".cir").style.marginLeft = "-55px"
  //     flag--
  //   }
  // }

  return (
    <>
      {/* <Navbar title="LokeshApp" aboutText="About Us"></Navbar> */}
      {/* <div className={`container`} style={theme}> */}
      <div className={`container ${theme} textForm`}>
        <div className="mb-3 ">
          <h1>{props.heading}</h1>
          <div className="time mt-2" onLoad={time}>
            {times}
          </div>
          <textarea
            className="form-control mt-5"
            id="myBox"
            rows="8"
            value={text}
            placeholder={"Enter texts here"}
            onChange={handleChange}
          ></textarea>
          <div style={{ display: "flex", gap: "2vw" }} className="btns">
            <button className="btn btn-primary mt-4" onClick={toUpperCase}>
              Convert To UpperCase
            </button>
            <button className="btn btn-primary mt-4" onClick={toLowerCase}>
              Convert To lowerCase
            </button>
            <button className="btn btn-primary mt-4" onClick={copyToClip}>
              Copy All Text
            </button>
            <button className="btn btn-primary mt-4" onClick={removeAll}>
              Remove All
            </button>
            <button
              className="btn btn-primary mt-4"
              onClick={handleRemoveExtraSpaces}
            >
              RemoveExtraSpaces
            </button>
            <button
              type="button"
              className="btn btn-primary mt-4"
              // onClick={toogleBtn}
              onClick={changeTheme}
            >
              {/* {btnText} */}
              {btnText}
            </button>
            {/* <div  style={{width:"7vw",height:"3vw",backgroundColor:"red",marginTop:"1.5vw"}} className="oval-box">
              <div style={{width:"3vw",backgroundColor:"blue", height:"inherit" , borderRadius:"50%", display:"flex" , justifyContent:"center", alignItems:"center"}} className="cir" onClick={moveToLeft}>
                {theme}
              </div>
          </div> */}
          </div>
          <div className="conatiner my-4">
            <h6>
              {text.replace(/ /g, "").length} Characters &{" "}
              {text.length > 0 ? text.split(" ").length : "0"} Words
            </h6>
            <h5>Preview</h5>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </>
  );
}
