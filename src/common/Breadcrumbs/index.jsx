import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { AiOutlineRight } from "react-icons/ai";
import "./Breadcrumbs.scss";

const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs();

  return (
    <div className="breadcrumbs-container">
      {breadcrumbs.map(({ breadcrumb }, index) => {
        if (index === breadcrumbs.length - 1) {
          return (
            <Link key={index} to={breadcrumb.key} replace={true}>
              {" "}
              {breadcrumb}
            </Link>
          );
        } else {
          return (
            <Fragment key={index}>
              <Link to={breadcrumb.key}> {breadcrumb}</Link>
              <span>
                {" "}
                <AiOutlineRight />{" "}
              </span>
            </Fragment>
          );
        }
      })}
    </div>
  );
};

export default Breadcrumbs;
