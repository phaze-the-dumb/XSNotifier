"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XSNotification = void 0;
const XSGlobals_1 = require("./helpers/XSGlobals");
class XSNotificationOptions {
}
class XSNotification {
    constructor(options) {
        this.UseBase64Icon = options.UseBase64Icon || XSGlobals_1.XSGlobals.DefaultUseBase64Icon;
        this.Height = options.Height || XSGlobals_1.XSGlobals.DefaultHeight;
        this.Opacity = options.Opacity || XSGlobals_1.XSGlobals.DefaultOpacity;
        this.Timeout = options.Timeout || XSGlobals_1.XSGlobals.DefaultTimeout;
        this.Volume = options.Volume || XSGlobals_1.XSGlobals.DefaultVolume;
        this.Index = options.Index || XSGlobals_1.XSGlobals.DefaultIndex;
        this.AudioPath = options.AudioPath || XSGlobals_1.XSGlobals.DefaultAudioPath;
        this.Content = options.Content || '';
        this.Icon = options.Icon || XSGlobals_1.XSGlobals.DefaultIcon;
        this.SourceApp = options.SourceApp || XSGlobals_1.XSGlobals.DefaultSourceApp;
        this.Title = options.Title || XSGlobals_1.XSGlobals.DefaultTitle;
        this.MessageType = options.MessageType || XSGlobals_1.XSGlobals.DefaultMessageType;
    }
    AsJson() {
        return {
            UseBase64Icon: this.UseBase64Icon,
            Height: this.Height,
            Opacity: this.Opacity,
            Timeout: this.Timeout,
            Volume: this.Volume,
            Index: this.Index,
            AudioPath: this.AudioPath,
            Content: this.Content,
            Icon: this.Icon,
            SourceApp: this.SourceApp,
            Title: this.Title,
            MessageType: this.MessageType
        };
    }
    AsJsonString() {
        return JSON.stringify(this.AsJson());
    }
}
exports.XSNotification = XSNotification;
