let rates = {};
const countryCurrencyList = {
  AFN: ["Afghanistan", "af"],
  ALL: ["Albania", "al"],
  DZD: ["Algeria", "dz"],
  USD: ["United States", "us"],
  EUR: ["Eurozone", "eu"],
  AOA: ["Angola", "ao"],
  ARS: ["Argentina", "ar"],
  AMD: ["Armenia", "am"],
  AUD: ["Australia", "au"],
  AZN: ["Azerbaijan", "az"],
  BSD: ["Bahamas", "bs"],
  BHD: ["Bahrain", "bh"],
  BDT: ["Bangladesh", "bd"],
  BBD: ["Barbados", "bb"],
  BYN: ["Belarus", "by"],
  BZD: ["Belize", "bz"],
  BOB: ["Bolivia", "bo"],
  BAM: ["Bosnia", "ba"],
  BWP: ["Botswana", "bw"],
  BRL: ["Brazil", "br"],
  GBP: ["United Kingdom", "gb"],
  BGN: ["Bulgaria", "bg"],
  KHR: ["Cambodia", "kh"],
  CAD: ["Canada", "ca"],
  CLP: ["Chile", "cl"],
  CNY: ["China", "cn"],
  COP: ["Colombia", "co"],
  CRC: ["Costa Rica", "cr"],
  HRK: ["Croatia", "hr"],
  CUP: ["Cuba", "cu"],
  CZK: ["Czech Republic", "cz"],
  DKK: ["Denmark", "dk"],
  DOP: ["Dominican Republic", "do"],
  EGP: ["Egypt", "eg"],
  ETB: ["Ethiopia", "et"],
  FJD: ["Fiji", "fj"],
  GEL: ["Georgia", "ge"],
  GHS: ["Ghana", "gh"],
  GTQ: ["Guatemala", "gt"],
  HNL: ["Honduras", "hn"],
  HKD: ["Hong Kong", "hk"],
  HUF: ["Hungary", "hu"],
  ISK: ["Iceland", "is"],
  INR: ["India", "in"],
  IDR: ["Indonesia", "id"],
  IRR: ["Iran", "ir"],
  IQD: ["Iraq", "iq"],
  ILS: ["Israel", "il"],
  JMD: ["Jamaica", "jm"],
  JPY: ["Japan", "jp"],
  JOD: ["Jordan", "jo"],
  KZT: ["Kazakhstan", "kz"],
  KES: ["Kenya", "ke"],
  KRW: ["South Korea", "kr"],
  KWD: ["Kuwait", "kw"],
  LAK: ["Laos", "la"],
  LBP: ["Lebanon", "lb"],
  LKR: ["Sri Lanka", "lk"],
  LYD: ["Libya", "ly"],
  MYR: ["Malaysia", "my"],
  MVR: ["Maldives", "mv"],
  MXN: ["Mexico", "mx"],
  MNT: ["Mongolia", "mn"],
  MAD: ["Morocco", "ma"],
  MMK: ["Myanmar", "mm"],
  NAD: ["Namibia", "na"],
  NPR: ["Nepal", "np"],
  NZD: ["New Zealand", "nz"],
  NGN: ["Nigeria", "ng"],
  NOK: ["Norway", "no"],
  OMR: ["Oman", "om"],
  PKR: ["Pakistan", "pk"],
  PAB: ["Panama", "pa"],
  PGK: ["Papua New Guinea", "pg"],
  PEN: ["Peru", "pe"],
  PHP: ["Philippines", "ph"],
  PLN: ["Poland", "pl"],
  QAR: ["Qatar", "qa"],
  RON: ["Romania", "ro"],
  RUB: ["Russia", "ru"],
  SAR: ["Saudi Arabia", "sa"],
  RSD: ["Serbia", "rs"],
  SGD: ["Singapore", "sg"],
  ZAR: ["South Africa", "za"],
  SEK: ["Sweden", "se"],
  CHF: ["Switzerland", "ch"],
  TWD: ["Taiwan", "tw"],
  TZS: ["Tanzania", "tz"],
  THB: ["Thailand", "th"],
  TND: ["Tunisia", "tn"],
  TRY: ["Turkey", "tr"],
  UGX: ["Uganda", "ug"],
  UAH: ["Ukraine", "ua"],
  AED: ["United Arab Emirates", "ae"],
  UYU: ["Uruguay", "uy"],
  UZS: ["Uzbekistan", "uz"],
  VND: ["Vietnam", "vn"],
  YER: ["Yemen", "ye"],
  ZMW: ["Zambia", "zm"],
  ZWL: ["Zimbabwe", "zw"]
};
async function loadCurrencies(){
  const res = await fetch("https://open.er-api.com/v6/latest/USD");
  const data = await res.json();
  rates = data.rates;

  const from = document.getElementById("from");
  const to = document.getElementById("to");

  Object.keys(rates).forEach(currency=>{
    from.innerHTML += `<option value="${currency}">${currency}</option>`;
    to.innerHTML += `<option value="${currency}">${currency}</option>`;
  });

  from.value = "USD";
  to.value = "INR";

  convert();
}

function convert(){
  const amount = document.getElementById("amount").value;
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;

  const baseRate = rates[to] / rates[from];
  const result = (amount * baseRate).toFixed(3);

  document.getElementById("fromText").innerText = amount + " " + from;
  document.getElementById("toText").innerText = result + " " + to;
}

loadCurrencies();