import { XSAudioDefault } from "../enum/XSAudioDefault";
import { XSIconDefault } from "../enum/XSIconDefault";
import { XSMessageType } from "../enum/XSMessageType";

export class XSGlobals{
    static DefaultServerPort: number = 42069;

    static MinHeight: number = 0.0;
    static MaxHeight: number = 250.0;

    static MinVolume: number = 0.0;
    static MaxVolume: number = 1.0;

    static MinFontSize: number = 0.0;
    static MaxFontSize: number = 100.0;
    static DefaultFontSize: number = 20.0;

    static MinOpacity: number = 0.0;
    static MaxOpacity: number = 0.0;

    static MinTimeout: number = 0.0;
    static MaxTimeout: number = 60.0;

    static DefaultIndex: number = 0;

    static DefaultAudioPath: string = this.GetBuiltInAudioSourceString(XSAudioDefault.Default);
    static DefaultIcon: string = this.GetBuiltInIconTypeString(XSIconDefault.Default);
    static DefaultMessageType: XSMessageType = XSMessageType.Notification;
    static DefaultSourceApp: string = '';
    static DefaultTitle: string = '';

    static DefaultUseBase64Icon: boolean = false;

    static DefaultHeight: number = 157.0;
    static DefaultOpacity: number = this.MaxOpacity;
    static DefaultTimeout: number = 3.0;
    static DefaultVolume: number = 0.7;

    public static GetBuiltInIconTypeString(iconType: XSIconDefault){
        if(iconType === XSIconDefault.Error)
            return "error"
        else if(iconType === XSIconDefault.Warning)
            return "warning"
        else
            return "default"
    }
    
    public static GetBuiltInAudioSourceString(audioType: XSAudioDefault){
        if(audioType === XSAudioDefault.Error)
            return "error"
        else if(audioType === XSAudioDefault.Warning)
            return "warning"
        else
            return "default"
    }
}
