import { XSGlobals } from "./src/helpers/XSGlobals";
import { XSAudioDefault } from "./src/enum/XSAudioDefault";
import { XSIconDefault } from "./src/enum/XSIconDefault";
import { XSMessageType } from "./src/enum/XSMessageType";
import { XSNotification } from "./src/XSNotification";
import { XSNotifier } from "./src/XSNotifier";

let forExport = {
    XSNotifier,
    XSNotification,
    Helpers: {
        XSGlobals
    },
    Enum: {
        XSAudioDefault,
        XSIconDefault,
        XSMessageType
    }
}

module.exports = forExport;