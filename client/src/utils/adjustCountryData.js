import React from "react"; 
import { useQuery } from "@apollo/client";
import { QUERY_COUNTRY_ADJUST } from "./queries";

export function useCountryData() {
    const nbmcUser = document.getElementById('nbmcUser');
    const wsUser = document.getElementById('wsUser');
    const shUser = document.getElementById('shUser');
    const psUser = document.getElementById('psUser');
    const abkUser = document.getElementById('abkUser');
    const aicUser = document.getElementById('aicUser');
    const hwUser = document.getElementById('hwUser');
    const eqUser = document.getElementById('eqUser');
    const prUser = document.getElementById('prUser');
    const pfcUser = document.getElementById('pfcUser');
    const inclUser = document.getElementById('inclUser');
    const aaeUser = document.getElementById('aaeUser');
    console.log(nbmcUser.value)
    const {loading, data} = useQuery(QUERY_COUNTRY_ADJUST, {
        variables: { spiyear: "2022" }
      });
    const countryData = data;
    console.log(countryData)
}