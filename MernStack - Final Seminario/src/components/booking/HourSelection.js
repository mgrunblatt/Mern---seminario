import React from "react";
import { useState } from 'react'
import LocalStorage from "../../services/LocalStorage";

const AVAILABLE_HOURS = [9, 10, 11, 12, 13, 14, 15, 16, 17];


const HourSelection = ({ availableHours, onSelect = () => { } }) => {

    const [selected, setSelected] = useState();

    const isSelected = (hour) => hour === selected;

    const onClickHour = (hour) => {
        setSelected(hour);
        onSelect(hour);
        LocalStorage.setObject("selectedHour", hour);
    }

    const isAvailable = (hour) => {
        return availableHours.includes(hour);
    }

    return (
        <div>
            <br />
            {AVAILABLE_HOURS.map(
                (hour) => <p>
                    <button type="button"
                        class="btn "
                        onClick={() => onClickHour(hour)}
                        style={isAvailable(hour) ? { width: 200 } : { width: 200, textDecoration: 'line-through' }}
                        className={isSelected(hour) ? "btn-secondary" : "btn-outline-secondary"}
                        disabled={!isAvailable(hour)}>
                        {hour}:00
                    </button>
                </p>
            )}
        </div>
    );
}

export default HourSelection;