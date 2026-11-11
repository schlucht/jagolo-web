export interface MaNotfication {
    title: string;
    message: string;
    type: NotificationType

}

export enum NotificationType {
    success = 'is-success',
    danger = 'is-danger',
    warning = 'is-waring',
}
