import * as React from "react";
import { useEffect } from "react";
import { Range, getTrackBackground } from "react-range";
import { useGlobalContext } from "../../Context";

const STEP = 1;
const MIN = 0;
const MAX = 1000;

const TwoThumbs = ({ rtl }) => {
  // const [values, setValues] = React.useState([25, 75]);
  const { handlePriceRange, priceRange } = useGlobalContext();

  // useEffect(() => {
  //   handlePriceRange(values);
  // }, [values]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <Range
        values={priceRange}
        step={STEP}
        min={MIN}
        max={MAX}
        rtl={rtl}
        onChange={(values) => {
          handlePriceRange(values);
        }}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: "15px",
              display: "flex",
              width: "100%",
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: "5px",
                width: "100%",
                borderRadius: "4px",
                background: getTrackBackground({
                  values: priceRange,
                  colors: ["#ccc", "black", "#ccc"],
                  min: MIN,
                  max: MAX,
                  rtl,
                }),
                alignSelf: "center",
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "20px",
              width: "20px",
              borderRadius: "100%",
              backgroundColor: "#FFF",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 2px 6px #AAA",
            }}
          >
            <div
              style={{
                height: "100%",
                width: "100%",
                backgroundColor: isDragged ? "black" : "#FFFF",
                borderRadius: "100%",
              }}
            />
          </div>
        )}
      />
    </div>
  );
};

export default TwoThumbs;
