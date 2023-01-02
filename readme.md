## XSNotifier

Shows notifications for [XSOverlay](https://store.steampowered.com/app/1173510/XSOverlay/)

```js
const n = require('../'); // Import the library

let notifier = new n.XSNotifier(); // Initilize the notifier

notifier.SendNotification(new n.XSNotification({ // Create a new notification and send it
    Title: 'test',
    Content: 'notification test',
    SourceApp: 'my app'
})).then(() => {
    console.log('Sent')
    notifier.Close(); // Make sure to close the connection when you are done with it, if you need to send more than one notification you can leave it open.
}).catch(e => 
    console.error(e));
```

### Notification Parameters

```js
{
    UseBase64Icon: boolean;

    Height: number;
    Opacity: number;
    Timeout: number;
    Volume: number;

    Index: number;

    AudioPath: string;
    Content: string;
    Icon: string;
    SourceApp: string;
    Title: string;

    MessageType: XSMessageType;
}
```

More information [here](https://xiexe.github.io/XSOverlayDocumentation/#/NotificationsAPI)