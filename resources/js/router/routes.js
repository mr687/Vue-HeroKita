function page(path) {
    return () => import (`../pages/${path}`).then(m => m.default || m)
}

function component(path) {
    // return () => import (`@/components/${path}`).then(m => m.default || m)
}

export default [
    { path: '/', component: page('Landing') }
]
