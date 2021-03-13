import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import exchange from "../images/exchange.png";
import pushbutton from "../images/push-button.png";
import line from "../images/line.png";
import CountUp from "react-countup";

// Electrical-images
import kansaidenki from "../images/ogp.png";
import officedenki from "../images/office_denki.png";
import ehuenedenki from "../images/ehuene_denki.png";
import haruenedenki from "../images/haruene_denki.png";
import eenedenki from "../images/eene_denki.png";
import smilepower from "../images/smile_power.png";
import softbankdenki from "../images/softbank_denki.png";
import osakadenki from "../images/osakadenki.png";
import audenki from "../images/au_denki.png";
import elenovadenki from "../images/Elenova.png";
import pintdenki from "../images/pint.png";
import eneosdenki from "../images/eneos_denki.png";
import kakuyasudenryoku from "../images/kakuyasudenryoku.png";
import tokyodenki from "../images/tokyo_denryoku.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16)
    }
  }
}));

function Result(props) {
  console.log(props.qI);

  let customePrice = parseInt(props.qI[4]);
  let fPrice = 0;
  let wat = 0;

  //関西電力
  let denkiImage = kansaidenki;
  let kihon = 341.02;
  let prices = [20.32, 25.8, 25.8, 29.29];

  if (props.qI[3] === "PinT電気") {
    denkiImage = pintdenki;
    kihon = 341.01;
    prices[0] = 20.31;
    prices[1] = 25.71;
    prices[2] = 25.71;
    prices[3] = 28.7;
  } else if (props.qI[3] === "エレノバ電気") {
    denkiImage = elenovadenki;
    kihon = 341.02;
    prices[0] = 20.32;
    prices[1] = 25.8;
    prices[2] = 25.8;
    prices[3] = 27.83;
  } else if (props.qI[3] === "東京電力") {
    denkiImage = tokyodenki;
    kihon = 286;
    prices[0] = 19.88;
    prices[1] = 26.48;
    prices[2] = 26.48;
    prices[3] = 30.57;
  } else if (props.qI[3] === "ハルエネ電気") {
    denkiImage = haruenedenki;
    kihon = 341.02;
    prices[0] = 20.32;
    prices[1] = 25.8;
    prices[2] = 25.8;
    prices[3] = 28.7;
  } else if (props.qI[3] === "エフエネ電気") {
    denkiImage = ehuenedenki;
    kihon = 341.02;
    prices[0] = 20.31;
    prices[1] = 25.06;
    prices[2] = 25.06;
    prices[3] = 27.1;
  } else if (props.qI[3] === "ソフトバンク電気") {
    denkiImage = softbankdenki;
    kihon = 341.02;
    prices[0] = 20.11;
    prices[1] = 25.54;
    prices[2] = 25.54;
    prices[3] = 28.99;
  } else if (props.qI[3] === "大阪ガス") {
    denkiImage = osakadenki;
    kihon = 285;
    prices[0] = 20.31;
    prices[1] = 24.9;
    prices[2] = 24.9;
    prices[3] = 27.83;
  } else if (props.qI[3] === "スマイルパワー") {
    denkiImage = smilepower;
    kihon = 341;
    prices[0] = 20.31;
    prices[1] = 25.71;
    prices[2] = 25.71;
    prices[3] = 28.7;
  } else if (props.qI[3] === "ENEOSでんき") {
    denkiImage = eneosdenki;
    kihon = 285;
    prices[0] = 20.31;
    prices[1] = 23.99;
    prices[2] = 23.99;
    prices[3] = 26.8;
  } else if (props.qI[3] === "ENE電気") {
    denkiImage = eenedenki;
    kihon = 170.505;
    prices[0] = 20.31;
    prices[1] = 25.71;
    prices[2] = 25.71;
    prices[3] = 28.7;
  } else if (props.qI[3] === "格安電力") {
    denkiImage = kakuyasudenryoku;
    kihon = 341.02;
    prices[0] = 20.31;
    prices[1] = 25.71;
    prices[2] = 25.71;
    prices[3] = 28.13;
  } else if (props.qI[3] === "関西電力なっとくパック") {
    denkiImage = kansaidenki;
    kihon = 285;
    prices[0] = 20.31;
    prices[1] = 24.1;
    prices[2] = 24.1;
    prices[3] = 27.8;
  } else if (props.qI[3] === "au電気") {
    denkiImage = audenki;
    kihon = 336.13;
    prices[0] = 20.31;
    prices[1] = 26.75;
    prices[2] = 26.75;
    prices[3] = 30.49;
  }

  for (let i = 0; i < 10000; i++) {
    if (i < 120) {
      fPrice += prices[0];
    } else if (i < 200) {
      fPrice += prices[1];
    } else if (i < 300) {
      fPrice += prices[2];
    } else if (300 < i) {
      fPrice += prices[3];
    }

    if (customePrice < fPrice) {
      fPrice += kihon;
      wat = i;
      break;
    }
  }
  console.log(wat);

  // オフィス電気割引なし
  const office = 341.02;
  const office1 = 20.31;
  const office2 = 25.06;
  const office3 = 25.06;
  const office4 = 27.1;

  let result1 = office + office1 * wat;
  let result2 = office + office1 * 120 + office2 * (wat - 120);
  let result3 = office + office1 * 120 + office2 * 80 + office3 * (wat - 200);
  let result4 =
    office +
    office1 * 120 +
    office2 * 80 +
    office3 * 100 +
    office4 * (wat - 300);

  function spread() {
    if (0 <= wat && wat <= 119) {
      return result1;
    } else if (120 <= wat && wat <= 199) {
      return result2;
    } else if (200 <= wat && wat <= 299) {
      return result3;
    } else if (300 <= wat) {
      return result4;
    }
  }

  let lastPrice = Math.round(fPrice * 12 - spread() * 12);

  //できない||料金が下がらないUI
  if (
    props.qI[0] === "家賃とまとめて請求がきている" ||
    (props.qI[1] === "はい" && props.qI[2] === "いいえ") ||
    props.qI[3] === "その他" ||
    lastPrice < 0
  ) {
    return (
      <div className="Result-box">
        <div className="topDiv">
          <h1 className="title">シミュレーション結果</h1>
          <div className="current">現状、金額は下がりませんでした</div>
        </div>
        <div className="bottomDiv">
          <Paper elevation={3}>
            <h3 className="consultation">
              ご相談により
              <br />
              金額が下がる可能性があります
            </h3>
            <Grid container>
              <Grid item xs></Grid>
              <Grid item xs={2}></Grid>
              <Grid item xs className="Left-logo"></Grid>
            </Grid>
            <div className="line-text2">
              <h5>LINE@を追加して相談する</h5>
            </div>
            <div className="push2">
              <img src={pushbutton} alt="push" />
            </div>
            <div className="line-button2">
              <a href="https://lin.ee/xs4rLVz">
                <img src={line} alt="line" width="80%" />
              </a>
            </div>
            <p className="YourTrouble">
              あなたの情報をLINE@で送信し
              <br />
              お悩みを解決しましょう。
            </p>
          </Paper>
        </div>
      </div>
    );
  }

  return (
    <div className="Result-box">
      <div className="topDiv">
        <h1 className="title">シミュレーション結果</h1>
        <div className="result">
          <h3 className="money-result">あなたの電気代が年間</h3>
          <h3 className="money-result">
            　約　
            <span id="price">
              <CountUp end={lastPrice} separator="," duration={3} />
            </span>
            　円
          </h3>

          <h3 className="money-result">お得になります</h3>
        </div>
      </div>
      <div className="bottomDiv">
        <Paper elevation={3}>
          <h3 className="h3">
            あなたにピッタリの
            <br />
            電気会社が見つかりました
          </h3>
          <Grid container>
            <Grid item xs>
              <img
                src={denkiImage}
                className="firstElectrical"
                alt="右電気"
                width="90%"
              />
            </Grid>
            <Grid item xs={2}>
              <img src={exchange} className="exchange" alt="矢印" />
            </Grid>
            <Grid item xs className="Left-logo">
              <img
                className="secondElectrical"
                src={officedenki}
                alt="左電気"
                width="90%"
              />
              <span className="logo-under">
                {lastPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                円お得
              </span>
            </Grid>
          </Grid>
          <div className="line-text">
            <h5>LINE@を追加して得する</h5>
          </div>
          <div className="push">
            <img src={pushbutton} alt="push" />
          </div>
          <div className="line-button">
            <a href="https://lin.ee/xs4rLVz">
              <img src={line} alt="line" width="65%" />
            </a>
          </div>
          <p className="YourInformation">
            あなたの情報をLINE@で送信し
            <br />
            オフィス電気に切り替えましょう。
          </p>
        </Paper>
      </div>
    </div>
  );
}

export default Result;
