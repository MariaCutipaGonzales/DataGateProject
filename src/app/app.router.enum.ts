export enum AppRoutePath {
    MANAGE = 'view-manage',
    REQUESTS = 'view-requests',
    REVIEW = "view-review"
}

export enum AppRoutePathName {
    MANAGE = 'manage',
    REQUESTS = 'requests',
    REVIEW = 'review'
}

export enum AppRoutePathModule {
    MANAGE = './components/manage/manage.module#ManageModule',
    REQUESTS = './components/requests/requests.module#RequestsModule',
}

export const enviroment = {
    url: 'http://localhost:3000'
}