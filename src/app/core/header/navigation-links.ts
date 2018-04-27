export const navigationLinks = [
    {
        name: 'Signin',
        routerLink: '/signin',
        roles: ['Admin', 'RegUser'],
        order: 0,
        overrideFunction: function() { console.log('override function clicked'); }
    },
    {
        name: 'Signup',
        routerLink: '/signup',
        roles: ['Admin', 'RegUser'],
        order: 1,
        overrideFunction: function() { console.log('override function clicked'); }
    },
    {
        name: 'Logout',
        routerLink: '/logout',
        roles: ['Admin', 'RegUser'],
        order: 2,
        overrideFunction: function() { console.log('override function clicked'); }
    }
]
