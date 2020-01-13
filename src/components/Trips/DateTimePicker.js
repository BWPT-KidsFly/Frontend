import React, { useState } from "react";
import { DateTimePicker, KeyboardDateTimePicker, MuiPickersUtilsProvider, } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
function InlineDateTimePicker(props) {
    const [selectedDate, handleDateChange] = useState(new Date("2018-01-01T00:00:00.000Z"));

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DateTimePicker
                variant="inline"
                label="Basic example"
                value={selectedDate}
                onChange={handleDateChange}
            />

            <KeyboardDateTimePicker
                variant="inline"
                ampm={false}
                label="With keyboard"
                value={selectedDate}
                onChange={handleDateChange}
                onError={console.log}
                disablePast
                format="yyyy/MM/dd HH:mm"
            />
        </  MuiPickersUtilsProvider>
    );
}

export default InlineDateTimePicker;