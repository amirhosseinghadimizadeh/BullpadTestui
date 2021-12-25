import React, { useState, useEffect } from "react";
import bullAbi from "./bullpadAbi.json";
import tokenAbi from "./tokenAbi.json";
import Web3 from "web3";
const web3 = new Web3("https://data-seed-prebsc-1-s1.binance.org:8545");
const idoInfo = [
  {
    id: 1,
    title: "Bulllaunchpad",
    img: "image/coins/ethermoon.jpg",
    progress: 0,
    idocontract: "0xaf2ff01a9d44b324c13928d7194305115496a573",
    date: "5h ago",
    commentCount: 5,
    shareCount: 2,
    access: "public",
    status: "ended",
  },
  {
    id: 3,
    title: "Bulllaunchpad",
    img: "image/coins/realfevr.jpg",
    progress: 0,
    idocontract: "0xaf2ff01a9d44b324c13928d7194305115496a573",
    date: "2h ago",
    commentCount: 3,
    shareCount: 2,
    access: "private",
    status: "future",
  },
  {
    id: 5,
    title: "Bulllaunchpad",
    img: "image/coins/ethermoon.jpg",
    progress: 0,
    idocontract: "0xaf2ff01a9d44b324c13928d7194305115496a573",
    date: "5h ago",
    commentCount: 5,
    shareCount: 2,
    access: "public",
    status: "ended",
  },
  {
    id: 2,
    title: "hmmm so pro",
    name: "hmmm so pro",
    img: "image/coins/ethermoon.jpg",
    contract: "0xaf2ff01a9d44b324c13928d7194305115496a573",
    idocontract: "0xaf2ff01a9d44b324c13928d7194305115496a573",
    rasingtoken: "0xaf2ff01a9d44b324c13928d7194305115496a573",
    startblock: "13682953",
    endblock: "13771000",
    whitelist: "",
    offeringallocation: "1000000000000000000000000",
    rasingallocation: "500000000000000000000000",
    description:
      "loren lorem lorem lorem lorem is imsum ipsum ipsum ipsum ipsum",
    progress: 0,
    access: "private",
    status: "ongoing",
  },
  {
    id: 0,
    title: "ForOffer",
    name: "ForOffer",
    img: "/image/coins/dragon.jpg",
    contract: "0x99F481B71be57504F52339D3DA20Dc57AF9478Ae",
    idocontract: "0xaf2ff01a9d44b324c13928d7194305115496a573",
    rasingtoken: "0x064A78da30516a066De73ba859F05793b9c74E99",
    startblock: "14835000",
    endblock: "14836000",
    vestingblock: "14775999",
    whitelist: "true",
    offeringallocation: "50000000000000000000",
    rasingallocation: "20000000000000000000",
    description:
      "loren lorem lorem lorem lorem is imsum ipsum ipsum ipsum ipsum",
    progress: 0,
    access: "public",
    status: "ongoing",
  },
];
function poolinfo(type) {
  let result = [];
  idoInfo.filter((pool) => {
    if (pool.status == type) {
      result.push(pool);
    }
  });
  return result;
}
const ongoingpool = poolinfo("ongoing");
const endedpool = poolinfo("ended");
const futurepool = poolinfo("future");
export { ongoingpool, endedpool, futurepool, idoInfo };
