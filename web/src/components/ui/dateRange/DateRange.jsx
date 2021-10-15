import React from "react";
import moment from "moment";

export function DateRange(props) {
    const { 
        from, 
        to, 
        template = "#F - #T, #Y yrs #M mos #D d",
        presentText = "Present"
    } = props;

    const dateFrom = !! from ? moment(from) : moment();
    const dateFromOrigin = !! from ? moment(from) : moment();
    const dateTo = !!to ? moment(to) : moment();

    const dYears = dateTo.diff(dateFrom, 'year');
    dateFrom.add(dYears, 'years');

    const dMonths = dateTo.diff(dateFrom, 'months');
    dateFrom.add(dMonths, 'months');

    const dDays = dateTo.diff(dateFrom, 'days');

    return (
        <>
            {template
                .replace("#F", dateFromOrigin.format("MMM YYYY"))
                .replace("#T", !!to ? dateTo.format("MMM YYYY") : presentText )
                .replace("#Y", dYears)
                .replace("#M", dMonths)
                .replace("#D", dDays)
            }
        </>
    )
}