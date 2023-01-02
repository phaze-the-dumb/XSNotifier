import { XSMessageType } from "./enum/XSMessageType";
import { XSGlobals } from "./helpers/XSGlobals";

class XSNotificationOptions{
    public UseBase64Icon!: boolean;

    public Height!: number;
    public Opacity!: number;
    public Timeout!: number;
    public Volume!: number;

    public Index!: number;

    public AudioPath!: string;
    public Content!: string;
    public Icon!: string;
    public SourceApp!: string;
    public Title!: string;

    public MessageType!: XSMessageType;
}

export class XSNotification{
    public UseBase64Icon: boolean;

    public Height: number;
    public Opacity: number;
    public Timeout: number;
    public Volume: number;

    public Index: number;

    public AudioPath: string;
    public Content: string;
    public Icon: string;
    public SourceApp: string;
    public Title: string;

    public MessageType: XSMessageType;

    constructor(options: XSNotificationOptions){
        this.UseBase64Icon = options.UseBase64Icon || XSGlobals.DefaultUseBase64Icon;
        
        this.Height = options.Height || XSGlobals.DefaultHeight;
        this.Opacity = options.Opacity || XSGlobals.DefaultOpacity;
        this.Timeout = options.Timeout || XSGlobals.DefaultTimeout;
        this.Volume = options.Volume || XSGlobals.DefaultVolume;
        
        this.Index = options.Index || XSGlobals.DefaultIndex;

        this.AudioPath = options.AudioPath || XSGlobals.DefaultAudioPath;
        this.Content = options.Content || '';
        this.Icon = options.Icon || XSGlobals.DefaultIcon;
        this.SourceApp = options.SourceApp || XSGlobals.DefaultSourceApp;
        this.Title = options.Title || XSGlobals.DefaultTitle;

        this.MessageType = options.MessageType || XSGlobals.DefaultMessageType;
    }

    AsJson(){
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
        }
    }

    AsJsonString(){
        return JSON.stringify(this.AsJson());
    }
}