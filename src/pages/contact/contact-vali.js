import { useState } from "react";


export function ValidateData(inputType, value) {
    let status = 0;
    if (value) {
        switch (inputType) {
            case 0:
                //  name
                if (value.length > 3)
                    status = 1
                else
                    status = 2
                break;
            case 1:
                //  email
                if(value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))
                    status = 1
                else
                    status = 2
                break;
            case 2:
                // msg
                if (value.length > 25)
                    status = 1
                else
                    status = 2
                break;
                case 3:
                    // tel
                    if (value.length == 9)
                        status = 1
                    else
                        status = 2
                    break;
        }
    }
    return status
}
// STATUS LIST:
// 0 - empty input
// 1 - correct input (validation passed)
// 2 - incorrect input (something wrong)