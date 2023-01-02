const n = require('../');

let notifier = new n.XSNotifier();

notifier.SendNotification(new n.XSNotification({
    Title: 'test',
    Content: 'notification test',
    SourceApp: 'my app'
})).then(() => {
    console.log('Sent')
    notifier.Close();
}).catch(e => 
    console.error(e));