import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";

function CanvasCard(props) {
  const { width, height } = props;
  const ref = useRef(null);
  useEffect(() => {
    const ctx = ref.current.getContext("2d");
    canvas(props, ctx);
  }, []);
  useEffect(() => {
    const ctx = ref.current.getContext("2d");
    clearCanvas(ctx, props);
    canvas(props, ctx);
  }, [props.reduxState]);
  return <canvas ref={ref} width={width} height={height}></canvas>;
}
const concatArr = arr => {
  let arr2 = arr.reduce((acc, next) => acc.concat(next), []);
  return arr2;
};
const getArrEight = arr => {
  return arr.filter((it, i) => (i < 8 ? true : false));
};
const text = (objText = undefined, ctx) => {
  if (objText !== undefined) {
    ctx.beginPath();
    ctx.font = "10px monospace";
    ctx.fillStyle = "black";
    ctx.fillText(objText.text, objText.textX, objText.textY);
    ctx.closePath();
  }
};

const line = (
  xStart,
  yStart,
  xEnd,
  yEnd,
  ctx,
  objText = undefined,
  color = "gray",
  props
) => {
  let height = props.height;
  ctx.fillStyle = "#fff";
  ctx.beginPath();
  ctx.lineWidth = "1";
  ctx.strokeStyle = "white";
  ctx.moveTo(xStart, yStart);
  ctx.lineTo(xEnd, yEnd);
  ctx.lineTo(xEnd, height);
  ctx.lineTo(xStart, height);
  ctx.lineTo(xStart, yStart);
  // ctx.fillStyle = "gainsboro";
  ctx.fillStyle = props.color;
  ctx.stroke();
  ctx.fill();
};

const clearCanvas = (ctx, props) => {
  ctx.clearRect(0, 0, props.width, props.height);
};

const checkItem = (arr, itemSearch) => {
  return arr.some((it, i) => {
    for (let key in it) {
      if (typeof it[key] === "object") {
        if (itemSearch in it[key]) {
          return true;
        } else {
          return false;
        }
      }
    }
  });
};

const getObj = (x, itemSearch) => {
  return x.reduce((ac, n, i) => {
    for (let key in n) {
      if (typeof n[key] === "object") {
        if (itemSearch in n[key]) {
          return (ac = [
            ...ac,
            {
              selectedParameter: n[key][itemSearch],
              thisDay: n["thisDay"],
              selectedParameterName: itemSearch
            }
          ]);
        } else {
          return;
        }
      }
    }
    return ac;
  }, []);
};

const canvas = (props, ctx) => {
  let today = new Date();
  let arrEight;
  let universalValue = props.item;
  let allDays = props.allDays;
  let day = props.day;
  console.log(`DAY`);
  console.log(day);
  let universalValueArr = allDays
    .map((it, i, ar) => {
      if (checkItem(it, universalValue)) {
        return getObj(it, universalValue);
      } else {
        return false;
      }
    })
    .filter(it => it !== false);
  debugger;
  if (day[0].thisDay == today.getDate()) {
    arrEight = getArrEight(concatArr(universalValueArr));
  } else {
    let universalValueDay = universalValueArr
      .map((it, i) => {
        return it.reduce((ac, n) => {
          if (n.thisDay === day[0].thisDay) {
            return (ac = [...ac, n]);
          } else {
            return false;
          }
          // return ac;
        }, []);
      })
      .filter(i => i !== false);
    console.log(universalValueDay);
    arrEight = universalValueDay[0];
  }
  console.log("ARR EIGHT ");
  console.log(arrEight);
  let w = props.width;
  let h = props.height;
  let copyArrEight = [...arrEight];
  let copyArrEightSort = copyArrEight.sort(
    (a, b) => b.selectedParameter - a.selectedParameter
  );
  let onePartW = w / 8;
  let onePartY;
  let paramY = Math.abs(copyArrEightSort[0]["selectedParameter"]);
  if (paramY > 0 && paramY <= 10) {
    onePartY = h / 30;
  } else if (paramY > 10 && paramY <= 20) {
    onePartY = h / 55;
  } else if (paramY > 20 && paramY <= 30) {
    onePartY = h / 80;
  } else if (paramY > 30 && paramY <= 40) {
    onePartY = h / 105;
  } else if (paramY > 40 && paramY <= 50) {
    onePartY = h / 130;
  } else if (paramY > 50 && paramY <= 70) {
    onePartY = h / 200;
  } else if (paramY > 70 && paramY <= 80) {
    onePartY = h / 230;
  } else if (paramY > 80 && paramY <= 90) {
    onePartY = h / 255;
  } else if (paramY > 90 && paramY <= 100) {
    onePartY = h / 275;
  } else if (paramY > 900 && paramY <= 1030) {
    onePartY = h / 105;
  } else if (paramY > 1030 && paramY <= 1040) {
    onePartY = h / 125;
  }

  let partWidthStart;
  let partWidthEnd;
  let prevHeightStart;
  let partHeightStart;
  let partHeightEnd;
  let prevTemp;

  arrEight.forEach((obj, i) => {
    let k = i + 1;
    if (k === 1) {
      if (obj.selectedParameterName === "pressure") {
        line(
          0,
          h / 2,
          onePartW * k,
          h / 2 - onePartY * (obj.selectedParameter - 1000),
          ctx,
          undefined,
          "gray",
          props
        );
        prevHeightStart = h / 2 - onePartY * (obj.selectedParameter - 1000);
      } else {
        line(
          0,
          h / 2,
          onePartW * k,
          h / 2 - onePartY * obj.selectedParameter,
          ctx,
          undefined,
          "gray",
          props
        );
        prevHeightStart = h / 2 - onePartY * obj.selectedParameter;
      }
      prevTemp = obj.selectedParameter;
      text(
        {
          text: obj.selectedParameter,
          textX: onePartW - 22,
          textY:
            obj.selectedParameterName === "pressure"
              ? h / 2 - onePartY * (obj.selectedParameter - 993)
              : h / 2 - onePartY * obj.selectedParameter - 7
        },
        ctx
      );
      return;
    }

    if (obj.selectedParameterName === "pressure") {
      partWidthStart = onePartW * (k - 1);
      partWidthEnd = onePartW * k;
      partHeightStart = prevHeightStart;
      partHeightEnd = h / 2 - onePartY * (obj.selectedParameter - 1000);
    } else {
      partWidthStart = onePartW * (k - 1);
      partWidthEnd = onePartW * k;
      partHeightStart = prevHeightStart;
      partHeightEnd = h / 2 - onePartY * obj.selectedParameter;
    }

    line(
      partWidthStart,
      partHeightStart,
      partWidthEnd,
      partHeightEnd,
      ctx,
      undefined,
      "gray",
      props
    );

    text(
      {
        text: obj.selectedParameter,
        textX:
          obj.selectedParameterName === "pressure"
            ? partWidthEnd - 27
            : partWidthEnd - 22,
        textY: partHeightEnd - 7
      },
      ctx
    );
    prevHeightStart = partHeightEnd;
    prevTemp = obj.selectedParameter;
  });
};

function mapStateToProps(state) {
  return {
    reduxState: state
  };
}
export default connect(
  mapStateToProps,
  null
)(CanvasCard);
