import { XSGlobals } from "./helpers/XSGlobals";
import { XSNotification } from "./XSNotification";
import * as dgram from "node:dgram"

export class XSNotifier{
    UDPClient: dgram.Socket;

    constructor(){
        this.UDPClient = dgram.createSocket('udp4');
    }

    SendNotification(notification: XSNotification){
        return new Promise<void>((resolve, reject) => {
            try{
                this.UDPClient.send(notification.AsJsonString(), XSGlobals.DefaultServerPort, '127.0.0.1', () => {
                    resolve();
                });
            } catch(e){
                reject(e);
            }
        })
    }

    Close(){
        this.UDPClient.close();
    }
}