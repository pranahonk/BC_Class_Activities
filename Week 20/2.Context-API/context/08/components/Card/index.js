import React from "react";
import CardBody from "../CardBody";
import CardBtn from "../CardBtn";
import CardImg from "../CardImage";
import CardHeading from "../CardHeading";
import "./style.css";

function Card({ title, image, profileUrl, handleBtnClick }) {
  /* 
    Add props to the components below as explained in the README for this activity.
  */
  return (
    <div>
      <CardHeading title={title} />
      <CardImg image={image} />
      <CardBody profileUrl={profileUrl} />
      {!image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
      <CardBtn
        style={{ opacity: image ? 1 : 0 }}
        onClick={handleBtnClick}
        data-value="back"
      />
      <CardBtn
        style={{ opacity: image ? 1 : 0 }}
        onClick={handleBtnClick}
        data-value="next"
      />
    </div>
  );
}

export default Card;
