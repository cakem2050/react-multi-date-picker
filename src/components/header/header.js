import React from "react"
import Arrow from "../arrow/arrow"

export default function Header({ state, setState }) {
    return (
        <div className="rmdp-header" style={{ display: state.onlyTimePicker ? "none" : "block" }}>
            <div style={{ display: "flex" }}>
                <Arrow direction="rmdp-left" onClick={() => increaseValue(-1)} />
                <div className="rmdp-header-values">
                    <span
                        className={`${state.mustShowMonthPicker ? "active" : ""}`}
                        onClick={() => toggle("mustShowMonthPicker")}
                    >
                        {Array.isArray(state.months) && state.months.length === 12 ?
                            state.months[state.date.month.index] :
                            state.date.month.name
                        }
                    </span>,
                    <span
                        className={`${state.mustShowYearPicker ? "active" : ""}`}
                        onClick={() => toggle("mustShowYearPicker")}
                    >
                        {state.date.format("YYYY")}
                    </span>
                </div>
                <Arrow direction="rmdp-right" onClick={() => increaseValue(1)} />
            </div>
        </div>
    )

    function increaseValue(value) {
        let { date } = state

        if (!state.mustShowYearPicker) {
            date.month += value
        } else {
            date.year += value * 12
        }

        setState({
            ...state,
            date
        })
    }

    function toggle(picker) {
        let object = {
            mustShowMonthPicker: false,
            mustShowYearPicker: false
        }

        object[picker] = !state[picker]

        setState({
            ...state,
            ...object
        })
    }
}