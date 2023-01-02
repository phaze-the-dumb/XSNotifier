"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const XSGlobals_1 = require("./src/helpers/XSGlobals");
const XSAudioDefault_1 = require("./src/enum/XSAudioDefault");
const XSIconDefault_1 = require("./src/enum/XSIconDefault");
const XSMessageType_1 = require("./src/enum/XSMessageType");
const XSNotification_1 = require("./src/XSNotification");
const XSNotifier_1 = require("./src/XSNotifier");
let forExport = {
    XSNotifier: XSNotifier_1.XSNotifier,
    XSNotification: XSNotification_1.XSNotification,
    Helpers: {
        XSGlobals: XSGlobals_1.XSGlobals
    },
    Enum: {
        XSAudioDefault: XSAudioDefault_1.XSAudioDefault,
        XSIconDefault: XSIconDefault_1.XSIconDefault,
        XSMessageType: XSMessageType_1.XSMessageType
    }
};
module.exports = forExport;
