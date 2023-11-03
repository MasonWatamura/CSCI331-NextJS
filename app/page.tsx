"use client"
import React, { useEffect, useState } from "react"
import CountButton from "./CountButton"
import SearchBar from "./SearchBar"

export default function Page() {
    return <>
    <h1>Assignment 7</h1>
    <h2><u>Counters</u></h2>
    <div>
      <CountButton incrementsBy={1}/>
      <CountButton incrementsBy={2}/>
    </div>

    <h2><u>Github Link</u></h2>
    <a href="https://github.com/MasonWatamura/CSCI331-NextJS">Github Repo</a>

    <h2><u>Fake Store</u></h2>
    <SearchBar/>
    </>
  }