import React from "react";
import moment from "moment";

export function DateRange(props) {
    const { 
        from, 
        to, 
        showDateDiff = true,
        locale = {
            baseLang: "en",        
            present: "present",
            abbrYears: "yrs",
            abbrMonths: "mos"
        }
    } = props;

    // Get moment
    const dateFrom = !!from ? moment(from) : moment();
    const dateTo = !!to ? moment(to) : moment();

    // Apply locale
    dateFrom.locale(locale.baseLang);
    dateTo.locale(locale.baseLang);

    // Calc diffs    
    const dateFromTmp = !!from ? moment(from) : moment();
    const dYears = dateTo.diff(dateFromTmp, 'year');
    dateFromTmp.add(dYears, 'years');

    const dMonths = dateTo.diff(dateFromTmp, 'months');
    dateFromTmp.add(dMonths, 'months');
    //const dDays = dateTo.diff(dateFrom, 'days');

    // Prepare template
    let template = "#F - #T";
    if (showDateDiff) {
        template += ", #Y #abbrYears #M #abbrMonths";
    }
    
    // Get text
    let text = template
        .replace("#F", dateFrom.format("MMM YYYY"))
        .replace("#T", !!to ? dateTo.format("MMM YYYY") : locale.present)
        .replace("#Y", dYears)
        .replace("#abbrYears", locale.abbrYears)
        .replace("#M", dMonths)
        .replace("#abbrMonths", locale.abbrMonths);

    return (<>{text}</>)
}