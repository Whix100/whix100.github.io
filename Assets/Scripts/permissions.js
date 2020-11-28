checkNotificationPerm();

function checkNotificationPerm() {
    if (Notification.permission != "granted") {
        Notification.requestPermission();
    }
}
