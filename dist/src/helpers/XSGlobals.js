"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.XSGlobals = void 0;
const XSAudioDefault_1 = require("../enum/XSAudioDefault");
const XSIconDefault_1 = require("../enum/XSIconDefault");
const XSMessageType_1 = require("../enum/XSMessageType");
class XSGlobals {
    static GetBuiltInIconTypeString(iconType) {
        if (iconType === XSIconDefault_1.XSIconDefault.Error)
            return "error";
        else if (iconType === XSIconDefault_1.XSIconDefault.Warning)
            return "warning";
        else
            return "default";
    }
    static GetBuiltInAudioSourceString(audioType) {
        if (audioType === XSAudioDefault_1.XSAudioDefault.Error)
            return "error";
        else if (audioType === XSAudioDefault_1.XSAudioDefault.Warning)
            return "warning";
        else
            return "default";
    }
}
exports.XSGlobals = XSGlobals;
_a = XSGlobals;
XSGlobals.DefaultServerPort = 42069;
XSGlobals.MinHeight = 0.0;
XSGlobals.MaxHeight = 250.0;
XSGlobals.MinVolume = 0.0;
XSGlobals.MaxVolume = 1.0;
XSGlobals.MinFontSize = 0.0;
XSGlobals.MaxFontSize = 100.0;
XSGlobals.DefaultFontSize = 20.0;
XSGlobals.MinOpacity = 0.0;
XSGlobals.MaxOpacity = 0.0;
XSGlobals.MinTimeout = 0.0;
XSGlobals.MaxTimeout = 60.0;
XSGlobals.DefaultIndex = 0;
XSGlobals.DefaultAudioPath = _a.GetBuiltInAudioSourceString(XSAudioDefault_1.XSAudioDefault.Default);
XSGlobals.DefaultIcon = _a.GetBuiltInIconTypeString(XSIconDefault_1.XSIconDefault.Default);
XSGlobals.DefaultMessageType = XSMessageType_1.XSMessageType.Notification;
XSGlobals.DefaultSourceApp = '';
XSGlobals.DefaultTitle = '';
XSGlobals.DefaultUseBase64Icon = false;
XSGlobals.DefaultHeight = 157.0;
XSGlobals.DefaultOpacity = _a.MaxOpacity;
XSGlobals.DefaultTimeout = 3.0;
XSGlobals.DefaultVolume = 0.7;
