export default{
    template: [
        {
            header: 'User',
            component: {
                name: 'el-button',
                text: "User",
                props: {
                    type:"warning",
                    "data-qa": "tab-button"
                }
            }
        },
        {
            header: 'Config',
            component: {
                name: 'el-button',
                text: "Config",
                props: {
                    type:"primary",
                    "data-qa": "tab-button"
                }
            }
        },
        {
            header: 'Role',
            component: {
                name: 'el-button',
                text: "Role",
                props: {
                    type:"danger",
                    "data-qa": "tab-button"
                }
            }
        }
    ]

}